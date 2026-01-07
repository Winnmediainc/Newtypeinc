"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ko"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.vision": "Vision",
    "nav.forum": "Forum 2025",
    "nav.technology": "Technology",
    "nav.history": "History",
    "nav.leadership": "Leadership",

    // Hero
    "hero.systemActive": "System Active",
    "hero.tagline": "Newtype Industries presents\nMission-Ready A.I. and the fastest K-FastTrack for the battlefield.",
    "hero.exploreTech": "Explore Technology",
    "hero.joinForum": "Join Forum",

    // Vision Section
    "vision.title": "Declaring a New Era of\nKorean Defense Innovation",
    "vision.card1.title": "A New Era of Defense",
    "vision.card1.desc": "Proclaiming Future Defense Vision",
    "vision.card2.title": "Fast-Track Acquisition",
    "vision.card2.desc": "Defense AI Fast-Track Proposal",
    "vision.card3.title": "A New Alliance",
    "vision.card3.desc": "New Player Coalition",
    "vision.card4.title": "Field-Oriented Strategy",
    "vision.card4.desc": "Battle-Proven Tech Strategy",

    // Forum Section
    "forum.badge": "Major Event",
    "forum.title": "DEFENDERS FORUM",
    "forum.subtitle": "Defense Ecosystem Innovation in the A.I. Era",
    "forum.description":
      "DEFENDERS FORUM goes beyond formal discussion,\nconnecting capabilities and commitment of\nresearch institutions, startups, and venture capital.",
    "forum.date": "2025. 12. 5. FRI",
    "forum.time": "14:00 - 18:00",
    "forum.venue": "Defense Convention",
    "forum.location": "Yongsan, Seoul",
    "forum.host": "Host/Organizer",
    "forum.hostName": "WARLAB x NEWTYPE",
    "forum.apply": "Apply for Forum",
    "forum.agenda": "Key Agenda",
    "forum.agenda1": "Defense Ecosystem Innovation in the A.I. Era",
    "forum.agenda2": "K-Defense Fast-Track Proposal\nfor Currently Available A.I.",
    "forum.agenda3": "Future of Mission Ready A.I.\nThrough U.S. Market Entry",
    "forum.agenda4": "Role and Preparation of Venture Capital\nin Bridging Defense Startups and Acquisition Systems",

    // Barbara Section
    "barbara.badge": "Core Technology",
    "barbara.title": "AI Fire Support System",
    "barbara.name": "'BARBARA'",
    "barbara.subtitle": "AI-Powered Precision Fire Support Solution\nThat Changes the Tide of Battle",
    "barbara.label": "BARBARA SYSTEM INTERFACE",
    "barbara.stat1": "Target Acquisition",
    "barbara.stat2": "Processing Speed",
    "barbara.stat3": "Uptime",
    "barbara.stat4": "Mission Success",
    "barbara.feature1.title": "Real-time Battlefield Analysis & Prediction",
    "barbara.feature1.desc": "AI-based real-time battlefield analysis\nfor optimal operation planning",
    "barbara.feature2.title": "Ultra-Precision Strike Solutions",
    "barbara.feature2.desc": "Precision fire path calculation\nand optimized strike planning",
    "barbara.feature3.title": "Automated Target Identification System",
    "barbara.feature3.desc": "Automatic enemy target identification\nand threat prioritization",

    // History Section
    "history.badge": "Company Timeline",
    "history.title": "MILESTONES & MOMENTS",
    "history.event1.date": "2025.11",
    "history.event1.title": "U.S. Branch Established",
    "history.event1.desc": "Newtype Industries USA Inc. Founded",
    "history.event2.date": "2025.10",
    "history.event2.title": "Venture Enterprise Certification",
    "history.event2.desc": "Recognized as an Innovative Tech Company",
    "history.event3.date": "2024.11",
    "history.event3.title": "Barbara Development Started",
    "history.event3.desc": "AI Fire Support System Development Initiated",
    "history.event4.date": "2024.06",
    "history.event4.title": "Newtype Industries Established",
    "history.event4.desc": "Defense AI Technology Company Founded",

    // Leadership Section
    "leadership.badge": "Executive Message",
    "leadership.title": "LEADERSHIP",
    "leadership.ceoName": "Seongwon Cho",
    "leadership.ceoNameKo": "조성원",
    "leadership.ceoTitle": "CEO",
    "leadership.ceoTitleKo": "대표이사",
    "leadership.mission": "Mission Ready AI for Modern Warfare",
    "leadership.quote1": "AI is not a 'someday technology' but a 'current weapon'.",
    "leadership.message1": "We are proving defense innovation through",
    "leadership.message2": "'Mission Ready AI' that can be deployed in combat",
    "leadership.message3": "'even tonight'.",
    "leadership.message4": "Newtype Industries will open a new future for Korean defense",
    "leadership.message5": "with AI systems that work immediately on the battlefield",
    "leadership.message6": "and the fastest K-FastTrack.",
    "leadership.signature": "Digital Signature",

    // Gallery Section
    "gallery.badge": "ACTIVITY GALLERY",
    "gallery.title": "Activity Gallery",
    "gallery.subtitle": "Key activities and event records of Newtype Industries",

    // Footer
    "footer.description":
      "Newtype Industries provides AI solutions ready for immediate battlefield deployment and innovative defense technology.",
    "footer.contact": "Contact",
    "footer.company": "Company",
    "footer.rights": "© 2025 Newtype Industries Co., Ltd. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  ko: {
    // Navbar
    "nav.vision": "비전",
    "nav.forum": "포럼 2025",
    "nav.technology": "기술",
    "nav.history": "연혁",
    "nav.leadership": "리더십",

    // Hero
    "hero.systemActive": "시스템 활성화",
    "hero.tagline": "뉴타입인더스트리즈가 전장에 필요한\n완성된 A.I.와 가장 빠른 K-FastTrack을 제시합니다.",
    "hero.exploreTech": "기술 살펴보기",
    "hero.joinForum": "포럼 참가",

    // Vision Section
    "vision.title": "대한민국 방산 혁신의\n새로운 시대를 선언합니다",
    "vision.card1.title": "A New Era of Defense",
    "vision.card1.desc": "미래 국방 비전 선포",
    "vision.card2.title": "Fast-Track Acquisition",
    "vision.card2.desc": "국방 AI 패스트트랙 제안",
    "vision.card3.title": "A New Alliance",
    "vision.card3.desc": "새로운 플레이어의 연대",
    "vision.card4.title": "Field-Oriented Strategy",
    "vision.card4.desc": "실전 중심 기술 전략",

    // Forum Section
    "forum.badge": "Major Event",
    "forum.title": "DEFENDERS FORUM",
    "forum.subtitle": "A.I. 시대 방산 생태계 혁신방안",
    "forum.description":
      "DEFENDERS FORUM은 형식적인 논의를 넘어,\n연구기관-스타트업-모험자본(VC)의 역량과 결심이 연결되는\n실질적인 연대의 장입니다.",
    "forum.date": "2025. 12. 5. FRI",
    "forum.time": "14:00 - 18:00",
    "forum.venue": "국방컨벤션",
    "forum.location": "서울 용산",
    "forum.host": "주최/주관",
    "forum.hostName": "WARLAB x NEWTYPE",
    "forum.apply": "포럼 참가 신청하기",
    "forum.agenda": "핵심 의제",
    "forum.agenda1": "A.I. 시대 방산 생태계 혁신 방안",
    "forum.agenda2": "현재 활용가능한 A.I.을 위한\nK방산 Fast-Track 안 제시",
    "forum.agenda3": "미국시장 진출을 통해 본\nMission Ready A.I. 의 미래",
    "forum.agenda4": "방산 스타트업과 획득제도 간극을 채우는\n모험자본의 역할과 준비",

    // Barbara Section
    "barbara.badge": "Core Technology",
    "barbara.title": "AI 포격 지원 시스템",
    "barbara.name": "'BARBARA'",
    "barbara.subtitle": "전장의 판도를 바꾸는\nAI 기반 정밀 포격 지원 솔루션",
    "barbara.label": "BARBARA SYSTEM INTERFACE",
    "barbara.stat1": "Target Acquisition",
    "barbara.stat2": "Processing Speed",
    "barbara.stat3": "Uptime",
    "barbara.stat4": "Mission Success",
    "barbara.feature1.title": "실시간 전장 분석 및 예측",
    "barbara.feature1.desc": "AI 기반 전장 환경 실시간 분석으로\n최적의 작전 수립",
    "barbara.feature2.title": "초정밀 타격 솔루션 제안",
    "barbara.feature2.desc": "정밀 포격 경로 계산 및\n최적화된 타격 방안 도출",
    "barbara.feature3.title": "자동화된 표적 식별 시스템",
    "barbara.feature3.desc": "적군 표적 자동 식별 및\n위협 우선순위 판단",

    // History Section
    "history.badge": "Company Timeline",
    "history.title": "MILESTONES & MOMENTS",
    "history.event1.date": "2025.11",
    "history.event1.title": "미국 지사 설립",
    "history.event1.desc": "Newtype Industries USA Inc 설립",
    "history.event2.date": "2025.10",
    "history.event2.title": "벤처기업 인증 획득",
    "history.event2.desc": "혁신 기술 기업으로서의 역량 인정",
    "history.event3.date": "2024.11",
    "history.event3.title": "Barbara 개발 시작",
    "history.event3.desc": "AI 포격 지원 시스템 개발 착수",
    "history.event4.date": "2024.06",
    "history.event4.title": "뉴타입 인더스트리즈 설립",
    "history.event4.desc": "국방 AI 기술 개발 전문 기업 출범",

    // Leadership Section
    "leadership.badge": "Executive Message",
    "leadership.title": "LEADERSHIP",
    "leadership.ceoName": "Seongwon Cho",
    "leadership.ceoNameKo": "조성원",
    "leadership.ceoTitle": "CEO",
    "leadership.ceoTitleKo": "대표이사",
    "leadership.mission": "Mission Ready AI for Modern Warfare",
    "leadership.quote1": "AI는 '언젠가 기술'이 아닌 '현재 무기'입니다.",
    "leadership.message1": "우리는 '오늘 밤이라도' 실전에 투입할 수 있는",
    "leadership.message2": "'Mission Ready AI'를 통해",
    "leadership.message3": "국방 혁신을 증명하고 있습니다.",
    "leadership.message4": "뉴타입인더스트리즈는 전장에서 즉시 작동하는 AI 시스템과",
    "leadership.message5": "가장 빠른 K-FastTrack을 통해",
    "leadership.message6": "대한민국 방산의 새로운 미래를 열어가겠습니다.",
    "leadership.signature": "Digital Signature",

    // Gallery Section
    "gallery.badge": "ACTIVITY GALLERY",
    "gallery.title": "활동 갤러리",
    "gallery.subtitle": "뉴타입인더스트리즈의 주요 활동 및 행사 기록",

    // Footer
    "footer.description": "뉴타입인더스트리즈는 전장에 즉시 투입 가능한 AI 솔루션과 혁신적인 방산 기술을 제공합니다.",
    "footer.contact": "Contact",
    "footer.company": "Company",
    "footer.rights": "© 2025 Newtype Industries Co., Ltd. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
