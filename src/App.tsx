import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './features/home/Home';
import About from './features/about/About';
import Customers from './features/customers/Customers';
import Career from './features/career/Career';
import Contact from './features/contact/Contact';
import ComingSoon from './features/common/ComingSoon';
import ScrollToTop from './lib/ScrollToTop';

type Language = 'en' | 'vn';

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_customers: 'Customers & Partners',
    nav_career: 'Career Opportunities',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    search_placeholder: 'Search...',

    // Hero
    hero_title:
      'AIDC corp. was established with the mission of pioneering in the fields of AI, data, and digital technologies.',
    hero_desc_1:
      'We deliver end-to-end solutions in software development, data analytics, and R&D in AI and AR/VR, enabling businesses to optimize performance and strengthen competitiveness.',
    hero_desc_2:
      'Innovation and advanced technologies are at the heart of our approach, ensuring sustainable and customized solutions for our clients.',
    hero_btn_services: 'Our services',
    hero_btn_contact: 'Contact us',

    // Core Services
    core_heading: 'Core services',
    svc1_title: 'Data analysis services, database construction',
    svc1_desc1:
      'We provide comprehensive data analysis services and database construction to help organizations transform raw information into actionable insights.',
    svc1_desc2:
      'Our solutions ensure reliable, scalable data infrastructures that support smarter decision-making and sustainable growth.',
    svc2_title: 'Application of new technology services',
    svc2_desc1:
      'We focus on harnessing the power of AI/ML, including computer vision and large language models (LLMs), to deliver intelligent, adaptive solutions.',
    svc2_desc2:
      'We help businesses integrate these cutting-edge technologies to enhance efficiency, automation, and user experiences.',
    svc3_title: 'Outsourcing services, software development',
    svc3_desc1: 'Software development services',
    svc3_desc2: 'Implement product technology transfer, upgrade product versions',
    svc3_desc3: 'R&D as per requirements',
    svc4_title: 'Consulting, integrating comprehensive IT systems',
    svc4_desc1:
      'We offer comprehensive IT systems, covering infrastructure, applications, and data environments.',
    svc4_desc2:
      'Our team ensures seamless connectivity between legacy and modern platforms, strengthens security, and improves system performance.',

    // Why Choose Us
    why_heading: 'Why choose us?',
    why_center_title: 'Growing together',
    why_center_desc: 'Building sustainable relationships',
    why_val_partnership: 'Partnership',
    why_val_excellence: 'Excellence',
    why_val_innovation: 'Innovation',
    why_val_quality: 'Quality',

    // Customers
    customers_heading: 'Customers & Partners',
    customers_commitment: 'Our commitment',
    com_1: '01. Continuous innovation to deliver outstanding value.',
    com_2: '02. Transparency and trust in every partnership.',
    com_3: "03. Long-term commitment to our customers' sustainable growth.",

    // Contact
    contact_heading: 'Get in touch',
    contact_intro:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contact_address: 'Address',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_hours: 'Office hours',
    contact_hours_mon: 'Mon - Sat: 8 am - 5 pm',
    contact_hours_sun: 'Sunday: CLOSED',
    contact_name: 'Your name',
    contact_email_ph: 'Your email',
    contact_org: 'Your organization',
    contact_subject: 'Subject',
    contact_message: 'Your message',
    contact_send: 'Send Message',

    // About
    about_title: 'About us',
    about_intro:
      'Vietnam AI Technology and Digital Transformation Joint Stock Company (AIDC Corp.) was established with the mission to pioneer in the fields of AI, data, and digital technology. We provide end-to-end solutions from software development and data analytics to R&D in AI, AR/VR, and green agriculture automation, helping businesses optimize operations and embrace sustainable growth. We also apply AI to monitor and improve CO₂ processes, supporting enterprises in reducing environmental impact. Innovation and advanced technologies are always at the core of our vision, enabling us to deliver tailored and sustainable solutions for our customers.',
    about_btn_discover: 'Discover our services',
    core_values_heading: 'Core values',
    cv_1: 'PRACTICE is the criterion to test TRUTH',
    cv_2: 'RESPONSIBILITY is our unwavering commitment TO CUSTOMERS',
    cv_3: 'CREATIVITY paves the way for BREAKTHROUGH',
    cv_4: 'DISCIPLINE builds COLLECTIVE STRENGTH',
    cv_5: 'QUALITY is the measure of REPUTATION',
    cv_6: 'TRANSPARENCY builds TRUST',
    cv_7: 'CONTINUOUS LEARNING so we can GO FURTHER',
    board_heading: 'Board of directors',
    bod_tan_name: 'Mr. Pham Huy Tan',
    bod_tan_position: 'Chairman & Founder',
    bod_tan_desc:
      "With strong leadership and a forward-looking vision, Mr. Huy Tan plays a pivotal role in guiding Vietnam AI Technology & Digital Transformation JSC toward sustainable growth and long-term success. As the guardian of corporate governance and strategic direction, he ensures that the company operates with transparency, efficiency, and responsibility, while fostering innovation and expanding partnerships. His leadership is instrumental in positioning the company as a trusted partner and a pioneer in the field of AI and digital transformation.",
    bod_cong_name: 'Mr. Nguyen Tien Cong',
    bod_cong_position: 'Head of Data Department',
    bod_cong_desc:
      'Mr. Tien Cong, Head of the Data Department at Vietnam AI Technology & Digital Transformation JSC, plays a pivotal role in defining the company’s data strategy and advancing its data-driven initiatives. He oversees data architecture, analytics, and governance, ensuring the effective utilization of AI and big data to optimize decision-making, enhance operational efficiency, and strengthen the company’s technological leadership.',
    bod_toan_name: 'Mr. Do Duy Toan',
    bod_toan_position: 'Head of Software Development & Co-Founder',
    bod_toan_desc:
      'With solid expertise in software engineering and project management, Mr. Duy Toan plays a key role in leading product development and ensuring the quality of enterprise solutions at Vietnam AI Technology & Digital Transformation JSC. He focuses on building efficient development processes, fostering innovation within the team, and delivering high-performance software solutions that meet the evolving needs of clients.',
    bod_quyet_name: 'Mr. Trinh Van Quyet',
    bod_quyet_position: 'CEO & Co-Founder',
    bod_quyet_desc:
      "With extensive experience in AI Technology and Digital Transformation, Mr. Quyet Trinh plays a strategic role in shaping the company's vision and driving technological growth at Vietnam AI Technology & Digital Transformation JSC. He is the key architect of the company’s core technology values, aiming to position the company as a pioneer in delivering comprehensive and sustainable digital solutions.",
    bod_dung_name: 'Mr Le Duc Dung',
    bod_dung_position: 'Head of AI Department - Co-Founder',
    bod_dung_desc:
      'Mr. Duc Dung, Deputy Director of the AI Center for Green Agriculture at Vietnam AI Technology & Digital Transformation JSC, plays a central role in applying artificial intelligence to sustainable farming solutions. He leads initiatives in smart automation, environmental monitoring, and CO₂ process optimization, enabling agricultural enterprises to improve productivity, reduce costs, and achieve long-term sustainability. His leadership fosters innovation and positions the company at the forefront of green agriculture transformation.',

    // Footer
    footer_desc:
      'Vietnam AI Technology and Digital Transformation Joint Stock Company - Pioneering in AI, data, and digital technologies to deliver innovative, sustainable solutions for businesses worldwide.',
    footer_quick_links: 'Quick Links',
    footer_home: 'Home',
    footer_about: 'About Us',
    footer_customers: 'Customers & Partners',
    footer_career: 'Career Opportunities',
    footer_blog: 'Blog',
    footer_contact: 'Contact',
    footer_contact_info: 'Contact Information',
    footer_copyright: 'All rights reserved.',
  },
  vn: {
    // Header
    nav_home: 'Trang chủ',
    nav_about: 'Về chúng tôi',
    nav_customers: 'Khách hàng & Đối tác',
    nav_career: 'Cơ hội nghề nghiệp',
    nav_blog: 'Blog',
    nav_contact: 'Liên hệ',
    search_placeholder: 'Tìm kiếm...',

    // Hero
    hero_title:
      'AIDC corp. được thành lập với sứ mệnh tiên phong trong các lĩnh vực AI, dữ liệu và công nghệ số.',
    hero_desc_1:
      'Chúng tôi cung cấp giải pháp end-to-end về phát triển phần mềm, phân tích dữ liệu và R&D trong AI và AR/VR, giúp doanh nghiệp tối ưu hiệu suất và tăng cường năng lực cạnh tranh.',
    hero_desc_2:
      'Đổi mới và công nghệ tiên tiến là trọng tâm trong cách tiếp cận của chúng tôi, đảm bảo các giải pháp bền vững và tùy chỉnh cho khách hàng.',
    hero_btn_services: 'Dịch vụ của chúng tôi',
    hero_btn_contact: 'Liên hệ',

    // Core Services
    core_heading: 'Dịch vụ cốt lõi',
    svc1_title: 'Dịch vụ phân tích dữ liệu, xây dựng cơ sở dữ liệu',
    svc1_desc1:
      'Cung cấp dịch vụ phân tích dữ liệu toàn diện và xây dựng CSDL giúp tổ chức chuyển đổi dữ liệu thô thành tri thức hữu ích.',
    svc1_desc2:
      'Giải pháp đảm bảo hạ tầng dữ liệu tin cậy, mở rộng, hỗ trợ quyết định thông minh và tăng trưởng bền vững.',
    svc2_title: 'Ứng dụng công nghệ mới',
    svc2_desc1:
      'Tập trung khai thác sức mạnh của AI/ML, bao gồm thị giác máy tính và LLM để cung cấp các giải pháp thông minh, thích ứng.',
    svc2_desc2:
      'Hỗ trợ doanh nghiệp tích hợp công nghệ tiên tiến nhằm nâng cao hiệu quả, tự động hóa và trải nghiệm người dùng.',
    svc3_title: 'Outsourcing, phát triển phần mềm',
    svc3_desc1: 'Dịch vụ phát triển phần mềm',
    svc3_desc2: 'Chuyển giao công nghệ sản phẩm, nâng cấp phiên bản',
    svc3_desc3: 'Nghiên cứu & phát triển theo yêu cầu',
    svc4_title: 'Tư vấn, tích hợp hệ thống CNTT tổng thể',
    svc4_desc1:
      'Cung cấp giải pháp hệ thống CNTT tổng thể: hạ tầng, ứng dụng, dữ liệu.',
    svc4_desc2:
      'Đảm bảo kết nối giữa hệ thống cũ và mới, tăng cường bảo mật và hiệu năng.',

    // Why Choose Us
    why_heading: 'Vì sao chọn chúng tôi?',
    why_center_title: 'Cùng nhau phát triển',
    why_center_desc: 'Xây dựng mối quan hệ bền vững',
    why_val_partnership: 'Đồng hành',
    why_val_excellence: 'Xuất sắc',
    why_val_innovation: 'Đổi mới',
    why_val_quality: 'Chất lượng',

    // Customers
    customers_heading: 'Khách hàng & Đối tác',
    customers_commitment: 'Cam kết của chúng tôi',
    com_1: '01. Liên tục đổi mới để tạo ra giá trị vượt trội.',
    com_2: '02. Minh bạch và tin cậy trong mọi quan hệ hợp tác.',
    com_3: '03. Gắn bó dài hạn vì tăng trưởng bền vững của khách hàng.',

    // Contact
    contact_heading: 'Liên hệ với chúng tôi',
    contact_intro:
      'Chúng tôi rất sẵn lòng lắng nghe bạn. Hãy gửi tin nhắn và chúng tôi sẽ phản hồi sớm nhất.',
    contact_address: 'Địa chỉ',
    contact_phone: 'Điện thoại',
    contact_email: 'Email',
    contact_hours: 'Giờ làm việc',
    contact_hours_mon: 'Thứ 2 - Thứ 7: 8:00 - 17:00',
    contact_hours_sun: 'Chủ nhật: Nghỉ',
    contact_name: 'Họ và tên',
    contact_email_ph: 'Email của bạn',
    contact_org: 'Tổ chức/Doanh nghiệp',
    contact_subject: 'Tiêu đề',
    contact_message: 'Nội dung liên hệ',
    contact_send: 'Gửi tin nhắn',

    // About
    about_title: 'Về chúng tôi',
    about_intro:
      'Công ty Cổ phần Công nghệ AI và Chuyển đổi Số Việt Nam (AIDC Corp.) được thành lập với sứ mệnh tiên phong trong các lĩnh vực AI, dữ liệu và công nghệ số. Chúng tôi cung cấp các giải pháp end-to-end từ phát triển phần mềm, phân tích dữ liệu đến R&D trong AI, AR/VR và tự động hóa nông nghiệp xanh, giúp doanh nghiệp tối ưu vận hành và hướng tới tăng trưởng bền vững. Chúng tôi cũng ứng dụng AI để giám sát và cải thiện quy trình CO₂, hỗ trợ doanh nghiệp giảm tác động môi trường. Đổi mới và công nghệ tiên tiến luôn là cốt lõi trong tầm nhìn, giúp chúng tôi mang đến các giải pháp tùy chỉnh và bền vững cho khách hàng.',
    about_btn_discover: 'Khám phá dịch vụ',
    core_values_heading: 'Giá trị cốt lõi',
    cv_1: 'THỰC TIỄN là tiêu chuẩn kiểm nghiệm CHÂN LÝ',
    cv_2: 'TRÁCH NHIỆM là cam kết không ngừng VỚI KHÁCH HÀNG',
    cv_3: 'SÁNG TẠO mở đường cho ĐỘT PHÁ',
    cv_4: 'KỶ LUẬT tạo nên SỨC MẠNH TẬP THỂ',
    cv_5: 'CHẤT LƯỢNG là thước đo UY TÍN',
    cv_6: 'MINH BẠCH xây dựng NIỀM TIN',
    cv_7: 'HỌC HỎI LIÊN TỤC để đi XA HƠN',
    board_heading: 'Ban lãnh đạo',
    bod_tan_name: 'Ông Phạm Huy Tân',
    bod_tan_position: 'Chủ tịch & Nhà sáng lập',
    bod_tan_desc:
      'Với năng lực lãnh đạo mạnh mẽ và tầm nhìn dài hạn, ông Phạm Huy Tân giữ vai trò dẫn dắt Công ty Cổ phần Công nghệ AI & Chuyển đổi Số Việt Nam hướng tới tăng trưởng bền vững. Ông đảm bảo quản trị minh bạch, hiệu quả và trách nhiệm, đồng thời thúc đẩy đổi mới, mở rộng hợp tác, đưa công ty trở thành đối tác tin cậy và tiên phong trong lĩnh vực AI và chuyển đổi số.',
    bod_cong_name: 'Ông Nguyễn Tiến Công',
    bod_cong_position: 'Trưởng bộ phận Dữ liệu',
    bod_cong_desc:
      'Ông Nguyễn Tiến Công giữ vai trò quan trọng trong việc định hình chiến lược dữ liệu và thúc đẩy các sáng kiến dựa trên dữ liệu của công ty. Ông phụ trách kiến trúc dữ liệu, phân tích và quản trị dữ liệu, khai thác hiệu quả AI và Big Data nhằm tối ưu quyết định, nâng cao hiệu suất vận hành và củng cố năng lực công nghệ.',
    bod_toan_name: 'Ông Đỗ Duy Toàn', 
    bod_toan_position: 'Trưởng bộ phận Phát triển Phần mềm & Đồng sáng lập',
    bod_toan_desc:
      'Với chuyên môn vững vàng về kỹ thuật phần mềm và quản lý dự án, ông ĐỗĐỗ Duy Toàn dẫn dắt phát triển sản phẩm và đảm bảo chất lượng các giải pháp doanh nghiệp. Ông tập trung xây dựng quy trình phát triển hiệu quả, thúc đẩy đổi mới và cung cấp giải pháp phần mềm hiệu năng cao đáp ứng nhu cầu khách hàng.',
    bod_quyet_name: 'Ông Trịnh Văn Quyết',
    bod_quyet_position: 'Tổng Giám đốc & Đồng sáng lập',
    bod_quyet_desc:
      'Với kinh nghiệm sâu rộng trong công nghệ AI và chuyển đổi số, ông Trịnh Văn Quyết giữ vai trò chiến lược trong việc định hình tầm nhìn và thúc đẩy tăng trưởng công nghệ của công ty. Ông là kiến trúc sư của các giá trị công nghệ cốt lõi, định vị công ty tiên phong cung cấp giải pháp số toàn diện và bền vững.',
    bod_dung_name: 'Ông Lê Đức Dũng',
    bod_dung_position: 'Trưởng bộ phận AI - Đồng sáng lập',
    bod_dung_desc:
      'Ông Lê Đức Dũng phụ trách các sáng kiến AI trong nông nghiệp xanh: tự động hóa thông minh, giám sát môi trường và tối ưu quy trình CO₂, giúp doanh nghiệp nông nghiệp nâng cao năng suất, giảm chi phí và phát triển bền vững. Vai trò của ông góp phần thúc đẩy đổi mới và đưa công ty dẫn đầu trong chuyển đổi nông nghiệp xanh.',

    // Footer
    footer_desc:
      'Công ty Cổ phần Công nghệ AI và Chuyển đổi Số Việt Nam - Tiên phong trong AI, dữ liệu và công nghệ số, mang đến các giải pháp đổi mới, bền vững cho doanh nghiệp.',
    footer_quick_links: 'Liên kết nhanh',
    footer_home: 'Trang chủ',
    footer_about: 'Về chúng tôi',
    footer_customers: 'Khách hàng & Đối tác',
    footer_career: 'Cơ hội nghề nghiệp',
    footer_blog: 'Blog',
    footer_contact: 'Liên hệ',
    footer_contact_info: 'Thông tin liên hệ',
    footer_copyright: 'Đã đăng ký bản quyền.',
  },
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('I18nContext not found');
  return ctx;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback(
    (key: string) => translations[language][key] ?? key,
    [language]
  );

  const ctxValue = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <I18nContext.Provider value={ctxValue}>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/career" element={<Career />} />
              <Route path="/blog" element={<ComingSoon />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </I18nContext.Provider>
  );
}
