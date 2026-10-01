import type { AspectRatio, MediaAsset } from "@/types";

/**
 * Yüklenen dosyayı (prototip: sunucu yok) saklanabilir bir MediaAsset'e çevirir.
 *
 * Neden data URL? `URL.createObjectURL` sadece o sekme açıkken geçerlidir; sayfa
 * yenilenince kırık görsel kalır. Görseli küçültüp JPEG data URL olarak saklarız
 * (~100 KB); videonun ise ilk karesini kapak olarak alırız. Mock videolar da
 * zaten birer kapak karesi; önizlemeler ikisini aynı şekilde gösterir.
 */

const MAX_EDGE = 900;
const JPEG_QUALITY = 0.8;
/** Videonun kapak karesi: siyah açılış karesine denk gelmesin diye biraz ileriden. */
const POSTER_TIME_SEC = 0.5;

const ASPECTS: { aspect: AspectRatio; ratio: number }[] = [
  { aspect: "9:16", ratio: 9 / 16 },
  { aspect: "4:5", ratio: 4 / 5 },
  { aspect: "1:1", ratio: 1 },
  { aspect: "16:9", ratio: 16 / 9 },
];

/** Gerçek en-boy oranına en yakın desteklenen oran. */
export const nearestAspect = (width: number, height: number): AspectRatio => {
  const ratio = width / Math.max(1, height);
  return ASPECTS.reduce((best, item) =>
    Math.abs(item.ratio - ratio) < Math.abs(best.ratio - ratio) ? item : best,
  ).aspect;
};

const drawToDataUrl = (source: CanvasImageSource, width: number, height: number) => {
  const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas desteklenmiyor.");
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", JPEG_QUALITY);
};

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Görsel okunamadı."));
    image.src = url;
  });

const loadVideoFrame = (url: string) =>
  new Promise<HTMLVideoElement>((resolve, reject) => {
    const element = document.createElement("video");
    element.muted = true;
    element.playsInline = true;
    element.preload = "auto";
    element.onloadedmetadata = () => {
      element.currentTime = Math.min(POSTER_TIME_SEC, element.duration / 2 || 0);
    };
    element.onseeked = () => resolve(element);
    element.onerror = () => reject(new Error("Video okunamadı."));
    element.src = url;
  });

export const isSupportedMedia = (file: File) =>
  file.type.startsWith("image/") || file.type.startsWith("video/");

export const readMediaFile = async (file: File): Promise<MediaAsset> => {
  const objectUrl = URL.createObjectURL(file);
  try {
    const id = `upload-${crypto.randomUUID()}`;
    const alt = file.name.replace(/\.[^.]+$/, "");
    if (file.type.startsWith("video/")) {
      const element = await loadVideoFrame(objectUrl);
      const { videoWidth: width, videoHeight: height } = element;
      return {
        id,
        kind: "video",
        url: drawToDataUrl(element, width, height),
        alt,
        aspect: nearestAspect(width, height),
        durationSec: Math.round(element.duration),
      };
    }
    const image = await loadImage(objectUrl);
    const { naturalWidth: width, naturalHeight: height } = image;
    return {
      id,
      kind: "image",
      url: drawToDataUrl(image, width, height),
      alt,
      aspect: nearestAspect(width, height),
    };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
};
