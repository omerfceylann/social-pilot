# SOCIALPILOT — FULL PRODUCT & FRONTEND DEVELOPMENT SPECIFICATION

You are building a polished, production-quality frontend prototype called **SocialPilot**.

SocialPilot is an AI-powered social media management assistant for brands and businesses.

The primary purpose of this project is **NOT to demonstrate backend/API integrations**.

The primary purpose is to demonstrate exceptional:

- Frontend engineering
- UI/UX design
- Visual hierarchy
- Responsive design
- Interaction design
- Micro-interactions
- Animation quality
- Component architecture
- State management
- Mock data architecture
- Product thinking

The final result should look like a **real modern SaaS product**, not a generic admin dashboard and not a template assembled from random UI components.

---

# 1. MOST IMPORTANT DESIGN PRINCIPLE

The product must feel:

**Simple + Premium + Modern + Calm + Intelligent**

The user should NEVER feel overwhelmed.

There are many features in the application, but they must not all be visible simultaneously.

The interface should follow this principle:

> Show the user what matters now. Reveal complexity only when the user asks for it.

Do NOT create a dashboard where 10–15 cards, charts, buttons and notifications are visible simultaneously.

Do NOT create a "feature showcase dashboard".

Do NOT overcrowd the screen.

Do NOT add buttons just because a feature exists.

Every element must have a clear purpose.

The user should immediately understand:

- Where am I?
- What can I do here?
- What is important?
- What should I do next?

---

# 2. DESIGN REFERENCE / VISUAL DIRECTION

Use the **fifth dark modern template** from the previous design exploration as the primary visual direction.

The design should resemble a premium modern SaaS application.

Think:

- modern AI SaaS
- social media management platform
- premium productivity software
- clean editorial layouts
- subtle futuristic details

But DO NOT overuse futuristic effects.

Avoid:

- excessive glassmorphism
- excessive gradients
- neon everywhere
- huge glowing elements
- excessive rounded cards
- excessive shadows
- excessive animations
- dense dashboards

Use:

- generous whitespace
- clear hierarchy
- subtle borders
- soft shadows
- large spacing
- elegant typography
- subtle gradients
- restrained accent colors
- smooth transitions
- consistent corner radius
- carefully designed empty states
- clear hover states

The application should feel expensive and polished.

---

# 3. TYPOGRAPHY

Use:

**Inter**

as the primary font everywhere.

Typography must have a strong hierarchy.

Use different weights and sizes instead of adding more colors.

Example hierarchy:

Page title:
32–40px

Section title:
20–24px

Card title:
15–18px

Body:
14–15px

Secondary text:
12–13px

Avoid excessive text.

Never use paragraphs when a short sentence is enough.

---

# 4. COLOR SYSTEM

Create a complete design token system.

Base colors should work in both:

- Light Mode
- Dark Mode

Dark mode should be the primary visual reference.

Dark mode should NOT be pure black.

Example:

Background:
#0B0B0F

Surface:
#121218

Surface elevated:
#18181F

Border:
#24242D

Primary text:
#F5F5F7

Secondary text:
#9999A5

Muted:
#6E6E78

Create 6 selectable accent themes:

1. Indigo
2. Violet
3. Blue
4. Emerald
5. Rose
6. Amber

Changing the theme should change the application's accent color system consistently.

Do not randomly recolor individual components.

Theme colors should affect:

- buttons
- links
- active navigation
- AI indicators
- chart accents
- focus states
- selected states
- badges
- subtle gradients

The user should be able to switch between themes from Settings.

Persist the selected theme using localStorage.

---

# 5. DARK / LIGHT MODE

The application must support:

- Dark Mode
- Light Mode

The selected mode should persist using localStorage.

Respect the user's system preference on first load if no preference exists.

The UI must look intentionally designed in both modes.

Do not simply invert colors.

---

# 6. RESPONSIVE DESIGN

The application must be fully responsive.

Desktop:
Primary experience.

Tablet:
Adapt layouts intelligently.

Mobile:
Do NOT simply shrink the desktop layout.

Create a proper mobile UX.

On mobile:

- sidebar becomes a compact navigation / drawer
- cards stack vertically
- horizontal content previews become scrollable where appropriate
- tables become cards
- analytics charts resize
- content creation becomes a vertical workflow
- platform previews remain usable
- buttons become touch-friendly
- bottom actions may become sticky when useful

Minimum target:

320px wide.

Test layouts around:

320px
375px
390px
768px
1024px
1440px

---

# 7. ANIMATION PRINCIPLES

Animations are extremely important.

Use a motion library such as:

**Framer Motion / Motion**

or the current equivalent appropriate for the chosen stack.

Animations should feel:

- smooth
- subtle
- premium
- intentional

Do NOT animate everything.

Use animations for:

### Page transitions

Subtle fade + slight vertical movement.

### Sidebar

Smooth open / close.

### Cards

Very subtle hover elevation / border / transform.

### AI suggestions

Smooth reveal.

### Platform switching

Crossfade / slide transition.

### Modals

Fade + scale / translate.

### Drawers

Smooth slide-in.

### Toasts

Subtle entrance and exit.

### Loading

Skeleton shimmer or subtle pulse.

### Charts

Animated initial rendering.

### Content preview

When the platform changes, the preview should transition smoothly rather than instantly jumping.

### Generated content

When AI-generated content appears, use a subtle reveal.

Do NOT use excessive bounce animations.

Do NOT use long animations.

Most transitions should feel around 150–300ms.

Some larger transitions may use 300–450ms.

Use easing functions that feel natural.

---

# 8. PRODUCT STRUCTURE

The main navigation must remain extremely simple.

Use:

```text
SocialPilot

Genel Bakış
İçerikler
Takvim
Gelen Kutusu
Analitik

----------------

Marka
Ayarlar
```

Do NOT create separate primary navigation items for:

- Trends
- AI Agent
- Brand DNA
- Notifications
- Reports
- Competitors
- Activity

unless absolutely necessary.

Those features should live inside the relevant sections.

The goal is to avoid overwhelming the user.

---

# 9. MAIN DASHBOARD

The dashboard should NOT look like a traditional dense admin dashboard.

It should answer two questions:

1. What is happening?
2. What should I do?

The dashboard should contain only the most important information.

Suggested structure:

## Header

Example:

"Hoş geldin, Ömer"

Small supporting text:

"Bugün markan için 3 önemli fırsat var."

Keep this calm and spacious.

---

## Primary actions

Only 2–3 actions.

For example:

[ Yeni içerik oluştur ]

[ Trendleri keşfet ]

[ Takvimi görüntüle ]

Do not add unnecessary quick-action cards.

---

## Important signals

Show a small number of important signals.

Example:

- 1 new content opportunity
- 2 comments waiting for reply
- 1 upcoming scheduled post

Do not create a large notification wall.

---

## Recommended Content

Show approximately 3 recommended content ideas.

Each card should contain:

- image
- platform
- title
- short description
- small AI indicator
- engagement potential
- CTA

Do not show too much information at once.

---

## Performance summary

Show only a few high-level metrics:

- Reach
- Engagement
- Followers
- Content performance

Use elegant minimal cards.

---

## AI Agent status

Instead of a large AI dashboard, show a compact card.

Example:

"AI Agent"

"Son 24 saatte:"

✓ 12 trend analiz edildi
✓ 3 içerik fırsatı bulundu
✓ 5 yorum incelendi

Keep this compact.

---

# 10. BRAND ONBOARDING

Brand identity creation is NOT mandatory.

After registration, the user must choose between:

### Option A

"Yeni bir marka oluşturuyorum"

### Option B

"Mevcut markamı yönetmek istiyorum"

This distinction is very important.

---

# 11. NEW BRAND FLOW

If the user chooses:

"Yeni bir marka oluşturuyorum"

ask:

### Basic information

- Marka adı
- Sektör
- Ülke
- Dil
- Website (optional)

### Target audience

- Hedef kitle
- Yaş aralığı
- Audience description

### Brand personality

Allow selecting multiple characteristics:

- Friendly
- Professional
- Premium
- Energetic
- Minimal
- Playful
- Trustworthy
- Bold

### Content style

Ask:

"Nasıl içerikler üretmek istiyorsun?"

Options:

- Educational
- Promotional
- Entertaining
- Storytelling
- Behind the scenes
- Community-focused
- Product-focused
- Trend-focused

Allow multiple selection.

### Content rules

Ask:

"İçerik oluştururken hangi kurallara uyulmalı?"

Example inputs:

- Kullanılmaması gereken kelimeler
- Kullanılması istenen kelimeler
- Emoji kullanımı
- Caption uzunluğu
- Hashtag kullanımı
- Marka tonu
- CTA tercihi
- Görsel stil

These must be editable later.

---

# 12. EXISTING BRAND FLOW

If user chooses:

"Mevcut markamı yönetmek istiyorum"

the onboarding must be different.

Ask:

- Marka adı
- Sektör
- Website
- Hangi platformları kullanıyorsun?
- Hangi platformlarda aktifsin?
- Mevcut içerik stilini nasıl tanımlarsın?
- Sosyal medyada neyi geliştirmek istiyorsun?
- Hedefin nedir?

Example goals:

- More engagement
- More followers
- More sales
- Brand awareness
- Better consistency
- Better content quality
- Community management

Do not force the user to create a brand identity from scratch.

Instead, generate an initial "Brand Profile" based on their answers.

---

# 13. SECTOR SELECTION

Provide 12 sectors + Other.

Sectors:

1. Restoran / Kafe
2. E-ticaret
3. Güzellik / Bakım
4. Fitness / Spor
5. Teknoloji / Yazılım
6. Eğitim
7. Gayrimenkul
8. Yerel Hizmet
9. Moda / Giyim
10. Sağlık / Wellness
11. Otomotiv
12. Seyahat / Turizm

13. Diğer

When "Diğer" is selected:

Show a text input:

"Sektörünü yaz"

Do NOT create mock data for custom sectors.

The custom sector only exists to demonstrate the UI flow.

---

# 14. SECTOR-BASED MOCK DATA

The application must NOT use real APIs.

Everything is mock data.

However, the mock data must feel realistic and should change according to the selected sector.

Each sector must have its own:

- example brand
- brand identity
- audience
- tone
- content rules
- example posts
- images
- captions
- hashtags
- music suggestions
- comments
- DM conversations
- analytics
- calendar
- trends
- AI recommendations

Do NOT use the same fake content for every sector.

For example:

Restaurant:

- new menu
- coffee
- behind-the-scenes
- customer experience

Technology:

- product launch
- educational carousel
- developer tips

Fitness:

- workout tips
- transformation
- exercise education

Real Estate:

- property tour
- neighborhood guide
- investment education

Fashion:

- seasonal collection
- styling tips
- product showcase

Travel:

- destination guide
- travel tips
- hotel experience

etc.

---

# 15. MOCK DATA ARCHITECTURE

Do NOT scatter mock data directly inside React components.

Create a structured mock data layer.

Example:

```ts
/mock
  /sectors
  /platforms
  /posts
  /comments
  /messages
  /analytics
  /calendar
  /brand
  /trends
```

Create reusable TypeScript interfaces.

For example:

```ts
Sector;
BrandProfile;
SocialAccount;
Post;
PostSuggestion;
PostAnalytics;
Comment;
DirectMessage;
CalendarItem;
Trend;
AIRecommendation;
```

Sector selection should determine which dataset is loaded.

---

# 16. SOCIAL ACCOUNT CONNECTIONS

The user can connect:

- Instagram
- TikTok
- YouTube
- X
- LinkedIn

This is a mock integration.

The user only needs to enter the platform ID / username.

Example:

```text
Instagram
@socialpilot.demo
[ Bağla ]
[ Hesap Oluştur ]
```

After entering a valid mock ID:

show:

✓ Connected

with account information.

"Bağla" should simulate connection.

"Hesap Oluştur" should open the appropriate platform's official account creation page in a new browser tab.

Do not implement real OAuth.

The UI should nevertheless feel like a real connection flow.

---

# 17. CONTENT SECTION

This is one of the most important sections.

The user should be able to see:

- AI recommended posts
- drafts
- scheduled posts
- published posts

Do not overwhelm the user with too many filters.

Use simple tabs or segmented controls.

Example:

```text
Önerilen
Taslaklar
Planlanan
Yayınlanan
```

---

# 18. CONTENT RECOMMENDATIONS

Each sector should have at least 3 example content recommendations.

Each recommendation should contain:

- title
- platform
- content type
- image/video placeholder
- short description
- caption
- hashtags
- music suggestion
- CTA
- AI reasoning
- estimated performance data
- related trend

The first recommendation should be clearly marked:

✦ AI Önerisi

The AI recommendation should be visually distinct but subtle.

Do not make AI labels huge.

---

# 19. CONTENT DETAIL / CREATION SCREEN

When the user clicks a recommended post title, open a polished content creation workspace.

Use a two-column layout on desktop.

Left:
Content controls.

Right:
Platform preview.

Example:

```text
CONTENT

Title
[ ... ]

Caption
[ ... ]

Hashtags
[ ... ]

Music
[ ... ]

CTA
[ ... ]

Media
[ Upload video/image ]
```

Each AI-generated field should show:

✦ AI Önerisi

The user can click any field.

When clicked, show alternative AI suggestions below it.

Example:

Caption:

✦ AI Önerisi

"Sabahın en güzel kokusu..."

Other AI suggestions:

1. "Her sabah yeniden..."
2. "İyi kahvenin..."
3. "Günün ilk molası..."

The user can select one.

The user must also be able to manually edit the content.

---

# 20. MEDIA UPLOAD

The user must be able to upload a video or image.

For the prototype:

simulate upload.

After upload, show the selected media.

Before finalizing the post, AI should provide a simulated media analysis.

Example:

"✦ AI Video Analizi"

"Video güçlü bir başlangıç sunuyor."

Suggestions:

- İlk 2 saniyede ürünü daha yakın göster.
- Videonun ilk karesinde hareket kullan.
- Metin overlay'i ekle.
- Videoyu 9:16 formatında tut.
- İlk 3 saniyede sonucu göster.

This is mock data.

Do not actually analyze the uploaded video with an AI API.

The purpose is to demonstrate the UX.

---

# 21. PLATFORM PREVIEWS

This is extremely important.

The user must be able to see how their content will look before publishing.

If Instagram is selected:

Show a realistic Instagram-style preview.

Support:

- Post
- Reel
- Story

If TikTok:

Show a TikTok-style vertical video preview.

If YouTube:

Show YouTube video / Shorts preview.

If LinkedIn:

Show LinkedIn feed post preview.

If X:

Show X post preview.

The previews should visually reflect the platform's design language.

Do not make every preview look like the same generic card with a different logo.

Platform switching should use smooth animations.

---

# 22. CONTENT PUBLISH FLOW

The final CTA should be:

"Paylaş"

After clicking:

show a polished confirmation state.

Example:

✓ İçerik paylaşıldı

"Instagram'da başarıyla yayınlandı."

Then the post should appear in:

- Published content
- Calendar
- Analytics

Use mock analytics.

---

# 23. POST ANALYTICS

After a post is published, it should have mock performance data.

Example:

Views:
24.8K

Likes:
1,840

Comments:
126

Shares:
342

Saves:
281

Engagement:
7.8%

Use realistic variation.

Do not make every post perform perfectly.

Some posts should perform average.

Some should perform well.

Some should underperform.

This makes the analytics experience realistic.

---

# 24. INBOX

The Inbox should have two main concepts:

- Comments
- DMs

Do not create a complicated CRM.

The user should easily switch between them.

---

# 25. PLATFORM SWITCHER IN INBOX

At the top of Inbox:

```text
Instagram
TikTok
YouTube
X
LinkedIn
```

When the user changes platform:

- content changes
- comments change
- messages change
- platform styling changes

Create 3 mock comments and 3 mock replies for each platform.

Also create realistic DM conversations.

The visual design should resemble each platform.

---

# 26. SMART COMMENT REPLIER

This is a key feature.

For each comment:

show the original comment.

Then show:

✦ AI Reply

Example:

User:
"Fiyatınız nedir?"

AI:
"Merhaba! Güncel fiyatlarımızı profilimizdeki bağlantıdan inceleyebilirsin. 😊"

Actions:

[ Düzenle ]

[ Gönder ]

The user should be able to edit the AI response.

The AI response must NEVER be visually confused with a user-written response.

Use a subtle AI badge.

---

# 27. DIRECT MESSAGES

Show realistic mock conversations.

When opening a conversation:

- show message history
- show user name
- platform identity
- timestamps
- message status

At the bottom:

Text input.

Above the input:

✦ AI Reply Suggestion

The user can:

- accept
- edit
- regenerate

Again, everything is mock.

---

# 28. CALENDAR

Calendar should answer:

"What did I publish?"

and

"What am I going to publish?"

Show:

- published
- scheduled
- draft
- suggested

Use platform icons.

The calendar should be clean.

Do not overload each date.

Clicking an event opens a detail drawer/modal.

Show:

- post preview
- platform
- time
- caption
- status
- analytics if published

---

# 29. ANALYTICS

Keep analytics visually simple.

Do not create a huge analytics wall.

Start with:

- Reach
- Engagement
- Followers
- Views

Then show:

"Top Performing Content"

and

"AI Insight"

Example:

"Reels containing behind-the-scenes content generated 34% more engagement this week."

Then:

"AI Recommendation"

"Try publishing another behind-the-scenes Reel within the next 3 days."

Use charts sparingly.

Charts must have clear labels.

Do not use charts simply because charts look impressive.

---

# 30. BRAND SECTION

The Brand section contains:

- Brand Profile
- Brand DNA
- Content Rules
- Connected Platforms

Keep it organized.

Brand DNA should be editable.

Example:

Brand Personality:

Friendly
Premium
Modern

Tone:

Warm
Conversational
Short

Content Rules:

✓ Avoid aggressive sales language
✓ Use short captions
✓ Maximum 5 hashtags
✓ Use emojis sparingly

All these settings should be editable.

---

# 31. SETTINGS

Settings should contain:

### Appearance

- Light / Dark
- Accent theme

### Language

- Turkish
- English

### Account

Basic profile information.

### Notifications

Simple toggles.

### Connected accounts

Social accounts.

Do not overload settings.

---

# 32. LANGUAGE

The application must support:

Turkish
English

Create a centralized translation system.

Do NOT hardcode every UI string directly into random components.

Use a simple i18n architecture.

The default language should be Turkish.

Changing language should update the UI.

Persist the language in localStorage.

---

# 33. MOCK AI BEHAVIOR

There is no real AI API.

But the UI should make the application feel intelligent.

Create realistic mock AI responses.

Use functions such as:

```ts
generatePostSuggestion();
generateCaptionSuggestion();
generateReply();
analyzeVideo();
generateBrandDNA();
generateTrendInsight();
generateAnalyticsInsight();
```

These can return predefined mock data.

Do NOT simply put the same response everywhere.

Responses should depend on:

- selected sector
- selected platform
- content type
- post topic
- brand personality

---

# 34. AI VISUAL LANGUAGE

AI should have a consistent visual identity.

Use a subtle:

✦

icon.

Examples:

✦ AI Önerisi
✦ AI Analizi
✦ AI Reply
✦ AI Insight

Do not put "AI" everywhere.

Only use it where the system actually generated or analyzed something.

---

# 35. EMPTY STATES

Design beautiful empty states.

Examples:

No connected accounts:

"Henüz bir sosyal medya hesabı bağlamadın."

[ Hesap bağla ]

No scheduled posts:

"Takviminde henüz planlanmış bir içerik yok."

[ İçerik oluştur ]

No messages:

"Gelen kutun temiz."

These should feel intentional, not unfinished.

---

# 36. LOADING STATES

Create skeleton states for:

- dashboard
- content
- analytics
- inbox
- calendar
- brand analysis

Do not use generic spinners everywhere.

Skeleton loading should preserve layout.

---

# 37. TOAST / FEEDBACK SYSTEM

Create polished toast notifications.

Examples:

"İçerik kaydedildi."

"Instagram hesabı bağlandı."

"İçerik paylaşıldı."

"Yanıt gönderildi."

"Marka bilgileri güncellendi."

Toasts should enter and exit smoothly.

---

# 38. COMPONENT ARCHITECTURE

Create reusable components.

Suggested:

```text
components/
  layout/
    Sidebar
    Topbar
    MobileNav

  ui/
    Button
    Card
    Badge
    Modal
    Drawer
    Tabs
    Toast
    Tooltip
    Dropdown
    Avatar
    Skeleton

  ai/
    AIBadge
    AISuggestion
    AIInsight
    AIReply

  social/
    PlatformIcon
    PlatformSwitcher
    SocialAccountCard

  content/
    ContentCard
    ContentEditor
    ContentPreview
    InstagramPreview
    TikTokPreview
    YouTubePreview
    LinkedInPreview
    XPreview

  inbox/
    CommentCard
    MessageThread
    SmartReply

  analytics/
    MetricCard
    Chart
    PerformanceCard

  calendar/
    CalendarView
    CalendarEvent

  brand/
    BrandDNA
    BrandRules
```

Do not create giant monolithic components.

---

# 39. STATE MANAGEMENT

Use a simple state architecture.

Do not introduce unnecessary complexity.

Persist important prototype state with localStorage where useful:

- selected sector
- selected brand
- theme
- language
- dark/light mode
- connected accounts
- created posts
- calendar items
- edited brand rules

The application should feel stateful.

For example:

If the user edits a caption and returns to the page, the edit should not immediately disappear.

---

# 40. PLATFORM PREVIEW DESIGN

Platform previews are one of the strongest frontend showcase areas.

Make them visually detailed.

Instagram:

- top profile row
- avatar
- username
- post media
- interaction row
- likes
- caption
- comments
- bottom navigation where appropriate

TikTok:

- full vertical video
- right-side action buttons
- profile
- caption
- music
- bottom navigation feel

YouTube:

- video thumbnail
- channel information
- title
- views
- actions

LinkedIn:

- profile header
- post text
- media
- reactions
- comments
- repost

X:

- avatar
- username
- text
- media
- interaction row

These should feel inspired by the platforms without requiring actual API data.

---

# 41. ACCESSIBILITY

Use:

- semantic HTML
- keyboard navigation
- focus states
- aria labels where necessary
- sufficient contrast
- readable font sizes
- accessible buttons

Do not sacrifice accessibility for visual effects.

---

# 42. MOBILE CONTENT EDITOR

On mobile, the two-column content editor becomes:

1. Platform preview
2. Content controls

or allow a segmented toggle:

```text
Preview | Edit
```

This is preferable to squeezing both columns onto a small screen.

---

# 43. MOBILE NAVIGATION

Use:

- hamburger/drawer
  or
- compact bottom navigation

Do not show the full desktop sidebar on mobile.

---

# 44. NO REAL API

IMPORTANT:

Do NOT implement:

- Instagram API
- TikTok API
- YouTube API
- LinkedIn API
- X API
- OAuth
- real AI API

Everything must work using mock data.

The project should be completely demonstrable without API keys.

The architecture should nevertheless be designed so that real APIs could theoretically be connected later.

Keep mock providers separated from UI components.

---

# 45. REALISTIC MOCK DATA

Mock data must feel believable.

Avoid:

"Lorem ipsum"

"Test post"

"Lorem caption"

"123 likes"

Use realistic Turkish social media content.

Use realistic:

- names
- usernames
- timestamps
- captions
- comments
- metrics
- engagement ratios
- hashtags
- content titles

The user should feel like they are using a real social media management application.

---

# 46. DATA RELATIONSHIPS

Mock data must be internally consistent.

Example:

If a post is published:

It should appear in:

- Published Content
- Calendar
- Analytics
- Dashboard performance

If the user changes the selected sector:

The recommended content should change.

If the selected platform changes:

The content preview should change.

If the user changes brand rules:

Future generated mock suggestions should reflect the new rules where practical.

---

# 47. IMPORTANT UX RULE

Never show every possible action at once.

Prefer:

```text
Primary action
Secondary action
More (...)
```

instead of:

```text
Edit
Duplicate
Share
Schedule
Delete
Export
Analyze
Regenerate
Move
Archive
...
```

Use contextual menus or drawers for secondary actions.

---

# 48. BUTTON HIERARCHY

Every screen should have:

One primary CTA.

Optional secondary CTA.

Everything else should be visually quieter.

Example:

Primary:
"Paylaş"

Secondary:
"Taslağı kaydet"

Tertiary:
"Önizle"

Do not make every button purple.

---

# 49. SPACING

Use generous spacing.

The previous dashboard design was intentionally too dense.

Do NOT reproduce that.

Prefer:

- larger section gaps
- fewer cards
- larger content areas
- more whitespace
- stronger hierarchy

The application should feel breathable.

---

# 50. DASHBOARD SHOULD NOT HAVE

Do NOT include separate right-side sections like:

- Quick Actions
- Inbox Attention
- Notifications
- Agent Activity
- Trend Radar
- Upcoming Posts

all at the same time.

Only show the most important information.

The rest belongs in dedicated sections.

---

# 51. VISUAL PRIORITY

The user should see:

1. Page title
2. Main action
3. Most important information
4. Supporting information
5. Secondary actions

Never the opposite.

---

# 52. MICROINTERACTIONS

Add polished microinteractions:

- buttons subtly scale on click
- cards slightly elevate on hover
- icons transition
- selected tabs animate an indicator
- switches animate
- dropdowns fade/slide
- AI suggestions appear smoothly
- preview changes animate
- toast notifications animate
- chart values animate
- content status changes animate

Keep them subtle.

---

# 53. ERROR STATES

Create realistic error states.

Examples:

"Bir şeyler ters gitti."

"İçerik oluşturulamadı."

"Tekrar dene."

But because this is a mock prototype, these can be simulated where useful.

---

# 54. DEMO EXPERIENCE

The application must be easy to demonstrate in an interview.

The ideal demo flow:

1. Register
2. Choose:
   "Yeni marka oluştur"
3. Select a sector
4. Fill brand information
5. Configure content preferences
6. Complete onboarding
7. Enter dashboard
8. Open Content
9. Select an AI recommendation
10. Open content editor
11. Select Instagram
12. See Instagram preview
13. Change AI caption suggestion
14. Upload/select mock video
15. See AI video suggestions
16. Click Share
17. Show success toast
18. Open Analytics
19. Show newly published post
20. Open Inbox
21. Switch platform
22. Open a comment
23. Show Smart Comment Replier
24. Edit AI response
25. Send
26. Open Calendar
27. Show published/scheduled content

This entire flow should feel coherent.

---

# 55. IMPORTANT: DO NOT BUILD A GENERIC ADMIN DASHBOARD

This is a frontend portfolio / interview project.

The reviewer should immediately notice:

- visual polish
- UX thinking
- responsive behavior
- animation quality
- reusable components
- thoughtful information architecture
- realistic product design

The goal is not:

"How many features can I fit on the screen?"

The goal is:

"How elegantly can I make a complex product feel simple?"

---

# 56. TECHNOLOGY

Use a modern stack.

Preferred:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui where appropriate
- Lucide icons
- Motion / Framer Motion
- Recharts or another lightweight chart library

Use Inter.

Do not add unnecessary libraries.

---

# 57. CODE QUALITY

Use:

- TypeScript types
- reusable components
- clean folder structure
- meaningful variable names
- no duplicated UI
- no huge components
- no hardcoded repeated values
- no inline random mock data scattered throughout components

Keep mock data separate.

Keep design tokens centralized.

---

# 58. IMPORTANT IMPLEMENTATION RULE

Do not spend the entire implementation on backend architecture.

This project is being evaluated primarily on frontend ability.

Prioritize:

1. UI
2. UX
3. Visual polish
4. Interaction
5. Animation
6. Responsive behavior
7. Component architecture
8. Mock data
9. Backend/API only conceptually

---

# 59. FINAL VISUAL GOAL

The final application should feel like a real premium SaaS product that could plausibly be launched commercially.

It should feel:

"Simple at first glance."

"Powerful when explored."

Not:

"Everything is visible immediately."

The user should never wonder:

"Where do I click?"

The answer should be obvious.

---

# 60. FINAL INSTRUCTION

Before finishing:

Review every page as a professional UI/UX designer.

Ask:

- Is this too crowded?
- Are there unnecessary buttons?
- Is there enough whitespace?
- Is the primary action obvious?
- Are secondary actions hidden appropriately?
- Does this look good in dark mode?
- Does it look good in light mode?
- Does mobile feel intentionally designed?
- Are animations smooth?
- Are transitions consistent?
- Does every card have a reason to exist?
- Does every piece of information have a clear hierarchy?
- Does the application feel like one coherent product?

If something can be removed without reducing functionality, prefer removing it.

If something can be simplified without reducing clarity, simplify it.

If a screen feels crowded, reduce visible information rather than shrinking everything.

Do NOT sacrifice usability to show more features.

The final result should prioritize:

**clarity > quantity**

**UX > feature count**

**visual hierarchy > information density**

**polish > unnecessary complexity**

**professionalism > flashy effects**

Build SocialPilot as a cohesive, polished, responsive product — not as a collection of disconnected screens.

While working on this project, explain what you are doing and why you are doing it.

I don't want you to simply generate the project for me. I want to understand the project and become familiar with the codebase.

Whenever you make an important change, briefly explain:

- What you are changing
- Which files you are creating or modifying
- Why this approach is being used
- How the code works
- How the different components interact with each other
- Any important frontend, React, Next.js, TypeScript, or UI/UX concepts involved

When introducing a new concept or pattern, explain it in a way that helps me understand it rather than assuming I already know it.

Do not explain every single line of code or overwhelm me with unnecessary details. Focus on the important architectural and technical decisions.

After completing each major step, give me a short summary of what was implemented and what I should understand about it before moving to the next step.

If there are multiple reasonable approaches, briefly explain the alternatives and why you recommend one.

I want to be able to take over and maintain this project myself after it is finished, so prioritize teaching me the structure and reasoning behind the implementation rather than just completing the task as quickly as possible.
