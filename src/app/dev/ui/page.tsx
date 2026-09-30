"use client";

/**
 * GEÇİCİ tasarım sistemi vitrini. Faz 12'de silinecek.
 * Tüm ui/ bileşenlerini her tema ve modda tek bakışta kontrol etmek için.
 */

import { Archive, Copy, MoreHorizontal, Plus, Settings, Trash2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Drawer } from "@/components/ui/Drawer";
import { Dropdown } from "@/components/ui/Dropdown";
import { Field } from "@/components/ui/Field";
import { IconButton } from "@/components/ui/IconButton";
import { Input, Textarea } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Skeleton } from "@/components/ui/Skeleton";
import { Switch } from "@/components/ui/Switch";
import { Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/cn";
import { ACCENT_SWATCHES, ACCENT_THEMES, isColorMode } from "@/lib/theme";
import { usePreferences } from "@/store/usePreferences";
import { toast } from "@/store/useToasts";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flex flex-col gap-5 border-t border-border pt-10">
    <h2 className="text-title">{title}</h2>
    {children}
  </section>
);

const Row = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap items-center gap-3">{children}</div>
);

export default function DesignSystemPage() {
  const { mode, accent, setMode, setAccent } = usePreferences();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notify, setNotify] = useState(true);

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-small font-medium text-fg-muted">Geçici · /dev/ui</p>
          <h1 className="text-display">Tasarım sistemi</h1>
          <p className="max-w-xl text-body-lg text-fg-secondary">
            Tüm temel bileşenler, her mod ve accent temasıyla.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Tabs value={mode} onValueChange={(value) => isColorMode(value) && setMode(value)}>
            <Tabs.List aria-label="Renk modu">
              <Tabs.Trigger value="light">Açık</Tabs.Trigger>
              <Tabs.Trigger value="dark">Koyu</Tabs.Trigger>
              <Tabs.Trigger value="system">Sistem</Tabs.Trigger>
            </Tabs.List>
          </Tabs>

          <div role="radiogroup" aria-label="Accent teması" className="flex gap-2">
            {ACCENT_THEMES.map((theme) => (
              <button
                key={theme}
                type="button"
                role="radio"
                aria-checked={accent === theme}
                aria-label={theme}
                onClick={() => setAccent(theme)}
                style={{ background: ACCENT_SWATCHES[theme] }}
                className={cn(
                  "size-7 rounded-full ring-offset-2 ring-offset-bg transition-shadow",
                  accent === theme && "ring-2 ring-fg",
                )}
              />
            ))}
          </div>
        </div>
      </header>

      <Section title="Tipografi">
        <div className="flex flex-col gap-3">
          <p className="text-display">Display · 36</p>
          <p className="text-title">Title · 22</p>
          <p className="text-heading">Heading · 16</p>
          <p className="text-body-lg">Body large · 15 — Bugün markan için 3 önemli fırsat var.</p>
          <p className="text-body text-fg-secondary">Body · 14 — ikincil metin rengi.</p>
          <p className="text-small text-fg-muted">Small · 13 — soluk metin, zaman damgaları.</p>
          <p className="text-caption text-fg-muted">Caption · 12</p>
        </div>
      </Section>

      <Section title="Yüzeyler">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["bg", "bg-bg"],
            ["surface", "bg-surface"],
            ["surface-elevated", "bg-surface-elevated"],
            ["surface-muted", "bg-surface-muted"],
          ].map(([name, className]) => (
            <div
              key={name}
              className={cn("flex h-20 items-end rounded-xl border border-border p-3", className)}
            >
              <span className="text-caption text-fg-secondary">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Butonlar">
        <Row>
          <Button variant="primary">Paylaş</Button>
          <Button>Taslağı kaydet</Button>
          <Button variant="ghost">Önizle</Button>
          <Button variant="soft">
            <Plus /> Yeni içerik
          </Button>
          <Button variant="danger">Sil</Button>
        </Row>
        <Row>
          <Button variant="primary" size="sm">
            Küçük
          </Button>
          <Button variant="primary" size="lg">
            Büyük
          </Button>
          <Button variant="primary" loading>
            Yükleniyor
          </Button>
          <Button disabled>Devre dışı</Button>
          <IconButton label="Ayarlar" icon={<Settings />} />
          <IconButton label="Ekle" icon={<Plus />} variant="secondary" />
        </Row>
      </Section>

      <Section title="Badge ve AI">
        <Row>
          <Badge>Taslak</Badge>
          <Badge tone="accent">Planlandı</Badge>
          <Badge tone="success">Yayınlandı</Badge>
          <Badge tone="warning">Bekliyor</Badge>
          <Badge tone="danger">Başarısız</Badge>
          <Badge tone="outline">Reel</Badge>
        </Row>
        <Row>
          <AIBadge>AI Önerisi</AIBadge>
          <AIBadge variant="filled">AI Önerisi</AIBadge>
          <AIBadge variant="filled">AI Video Analizi</AIBadge>
        </Row>
      </Section>

      <Section title="Kartlar">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <p className="text-caption text-fg-muted">Erişim</p>
            <p className="mt-2 text-title tabular-nums">128,4B</p>
            <p className="mt-1 text-small text-success">+12,4%</p>
          </Card>
          <Card interactive className="cursor-pointer">
            <AIBadge>AI Önerisi</AIBadge>
            <p className="mt-3 text-heading">Yeni menü tanıtımı</p>
            <p className="mt-1 text-small text-fg-secondary">Hover ile hafif yükselir.</p>
          </Card>
          <Card padding="sm" className="flex flex-col gap-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
          </Card>
        </div>
      </Section>

      <Section title="Sekmeler">
        <Tabs defaultValue="suggested">
          <Tabs.List aria-label="İçerik durumu">
            <Tabs.Trigger value="suggested">Önerilen</Tabs.Trigger>
            <Tabs.Trigger value="drafts">Taslaklar</Tabs.Trigger>
            <Tabs.Trigger value="scheduled">Planlanan</Tabs.Trigger>
            <Tabs.Trigger value="published">Yayınlanan</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
        <Tabs defaultValue="comments" variant="underline">
          <Tabs.List aria-label="Gelen kutusu">
            <Tabs.Trigger value="comments">
              Yorumlar <Badge tone="accent">3</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="messages">Mesajlar</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="comments" className="pt-4 text-fg-secondary">
            Yorumlar paneli
          </Tabs.Content>
          <Tabs.Content value="messages" className="pt-4 text-fg-secondary">
            Mesajlar paneli
          </Tabs.Content>
        </Tabs>
      </Section>

      <Section title="Form">
        <div className="grid max-w-xl gap-5">
          <Field label="Marka adı" hint="Sosyal medyada görünen adın.">
            <Input placeholder="ör. Kahve Durağı" />
          </Field>
          <Field label="Website" optional="İsteğe bağlı" error="Geçerli bir adres gir.">
            <Input defaultValue="kahveduragi" />
          </Field>
          <Field label="Hedef kitle açıklaması">
            <Textarea placeholder="Kimlere ulaşmak istiyorsun?" />
          </Field>
          <label className="flex items-center justify-between gap-4 text-body">
            Yeni yorum bildirimleri
            <Switch checked={notify} onCheckedChange={setNotify} />
          </label>
        </div>
      </Section>

      <Section title="Katmanlar">
        <Row>
          <Button onClick={() => setModalOpen(true)}>Modal aç</Button>
          <Button onClick={() => setDrawerOpen(true)}>Drawer aç</Button>
          <Button onClick={() => toast.success("İçerik paylaşıldı.", "Instagram'da yayınlandı.")}>
            Başarı toast
          </Button>
          <Button onClick={() => toast.error("İçerik oluşturulamadı.", "Tekrar dene.")}>
            Hata toast
          </Button>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <IconButton label="Diğer" icon={<MoreHorizontal />} showTooltip={false} />
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item icon={<Copy />}>Kopyala</Dropdown.Item>
              <Dropdown.Item icon={<Archive />}>Arşivle</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item icon={<Trash2 />} destructive>
                Sil
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Row>
        <Row>
          <Avatar name="Elif Yıldız" size="sm" />
          <Avatar name="Mert Kaya" />
          <Avatar
            name="Zeynep Arslan"
            size="lg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop"
          />
        </Row>
      </Section>

      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="İçeriği planla"
        description="Yayın tarihini ve saatini seç."
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Vazgeç
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Planla
            </Button>
          </>
        }
      >
        <p className="text-fg-secondary">Modal içeriği burada.</p>
      </Modal>

      <Drawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title="İçerik detayı"
        description="12 Ekim, 18:30 · Instagram"
        footer={
          <Button variant="primary" className="flex-1">
            Düzenle
          </Button>
        }
      >
        <div className="p-6 text-fg-secondary">Drawer içeriği burada.</div>
      </Drawer>
    </main>
  );
}
