// Shared header extras for every page: the ingredient search box and the
// language menu.
//
// Languages live under a path prefix (/en/, /zh/, /ja/, /vi/); vercel.json
// rewrites those paths to the same files. The prefix decides the language:
// the page body is translated by the Google Translate widget (which reads
// the googtrans cookie), while header labels use the short hand-written
// labels below so the menu never wraps. No prefix = Korean, the source.
(() => {
  const header = document.querySelector(".site-header");

  const LANGUAGES = [
    { prefix: "", google: "ko", html: "ko", label: "한국어" },
    { prefix: "en", google: "en", html: "en", label: "English" },
    { prefix: "zh", google: "zh-CN", html: "zh-CN", label: "中文" },
    { prefix: "ja", google: "ja", html: "ja", label: "日本語" },
    { prefix: "vi", google: "vi", html: "vi", label: "Tiếng Việt" },
  ];

  const LABELS = {
    en: {
      "원료 찾기": "Find ingredients",
      "원료 소싱요청": "Sourcing request",
      "공동구매": "Group buy",
      "원료문의": "Inquiries",
      "원료 등록": "List ingredient",
      "소개": "About",
      "로그인": "Log in",
      "회원가입": "Sign up",
      "나의 원료": "My ingredients",
      "내 즐겨찾기": "Favorites",
      "관리자": "Admin",
      "로그아웃": "Log out",
      "공급사": "Suppliers",
      "공급사 등록 안내": "Supplier guide",
      placeholder: "Search ingredients · suppliers",
    },
    zh: {
      "원료 찾기": "原料搜索",
      "원료 소싱요청": "采购需求",
      "공동구매": "联合采购",
      "원료문의": "原料咨询",
      "원료 등록": "原料登记",
      "소개": "关于我们",
      "로그인": "登录",
      "회원가입": "注册",
      "나의 원료": "我的原料",
      "내 즐겨찾기": "收藏",
      "관리자": "管理",
      "로그아웃": "退出",
      "공급사": "供应商",
      "공급사 등록 안내": "供应商入驻指南",
      placeholder: "搜索原料 · 供应商",
    },
    ja: {
      "원료 찾기": "原料を探す",
      "원료 소싱요청": "調達依頼",
      "공동구매": "共同購入",
      "원료문의": "お問い合わせ",
      "원료 등록": "原料登録",
      "소개": "紹介",
      "로그인": "ログイン",
      "회원가입": "新規登録",
      "나의 원료": "マイ原料",
      "내 즐겨찾기": "お気に入り",
      "관리자": "管理者",
      "로그아웃": "ログアウト",
      "공급사": "サプライヤー",
      "공급사 등록 안내": "サプライヤー案内",
      placeholder: "原料・サプライヤー検索",
    },
    vi: {
      "원료 찾기": "Tìm nguyên liệu",
      "원료 소싱요청": "Tìm nguồn",
      "공동구매": "Mua chung",
      "원료문의": "Hỏi đáp",
      "원료 등록": "Đăng nguyên liệu",
      "소개": "Giới thiệu",
      "로그인": "Đăng nhập",
      "회원가입": "Đăng ký",
      "나의 원료": "Nguyên liệu của tôi",
      "내 즐겨찾기": "Yêu thích",
      "관리자": "Quản trị",
      "로그아웃": "Đăng xuất",
      "공급사": "Nhà cung cấp",
      "공급사 등록 안내": "Hướng dẫn NCC",
      placeholder: "Tìm nguyên liệu · nhà cung cấp",
    },
  };

  // Hand-written page copy, keyed by data-i18n / data-i18n-placeholder.
  // Machine translation of these runs long and overflows the cards, so the
  // short versions below win; anything without a key is left to Google.
  const PAGE_TEXT = {
    en: {
      "home.hero.title": "Ingredient sourcing,<br />made simple",
      "home.hero.desc": "Find food, pharma and cosmetic ingredients and suppliers in one place.<br class=\"po-br\" /> Request samples and quotes instantly.",
      "home.search.placeholder": "Search ingredients or keywords",
      "search.button": "Search",
      "home.popular": "Popular:",
      "home.check1": "Free for buyers",
      "home.check2": "Instant samples &amp; quotes",
      "home.check3": "Global suppliers",
      "home.aud.title": "Who Allingre is for",
      "home.aud1": "Food<br />Manufacturers",
      "home.aud2": "Pharma<br />Companies",
      "home.aud3": "Cosmetic<br />Brands",
      "home.aud4": "R&amp;D ·<br />OEM · ODM",
      "home.aud5": "Suppliers &amp;<br />Distributors",
      "home.how.title": "How Allingre works",
      "home.step1": "Search &amp; Compare",
      "home.step1d": "Find ingredients and suppliers in one place",
      "home.step2": "Request Samples &amp; Quotes",
      "home.step2d": "Contact suppliers directly",
      "home.step3": "Sourcing Support",
      "home.step3d": "Can't find it? Post a sourcing request",
      "home.step4": "Close the Deal",
      "home.step4d": "Agree terms directly with suppliers",
      "home.how.cta": "Get started – free",
      "home.mock.query": "Vitamin D3",
      "home.mock.r1": "Vitamin D3 100,000 IU",
      "home.mock.o1": "Germany",
      "home.mock.r2": "Vitamin D3 oil",
      "home.mock.o2": "Switzerland",
      "home.mock.r3": "Vitamin D3 powder",
      "home.mock.o3": "India",
      "home.mock.cta": "Request sample &amp; quote",
      "req.title": "Sourcing request",
      "req.example": "Example",
      "req.name": "Ingredient",
      "req.vitd": "Vitamin D3",
      "req.sector": "Sector",
      "req.qty": "Volume",
      "req.qtyv": "500 kg / month",
      "req.sample": "Sample size",
      "req.docs": "Documents",
      "req.submit": "Submit",
      "req.s1": "Submitted",
      "req.s2": "Reviewed",
      "req.s3": "Reply ready",
      "req.toast": "New reply received",
      "req.toastd": "Vitamin D3 · status updated",
      "home.dark.eyebrow": "Sourcing Request",
      "home.dark.title": "Can't find an ingredient?<br />Request it",
      "home.dark.desc": "Share the name, volume and specs. We'll find suppliers who can deliver.",
      "home.dark.p1": "Only you can see your requests",
      "home.dark.p2": "Volume, samples and documents in one form",
      "home.dark.p3": "Replies appear on your sourcing page",
      "home.dark.cta": "Request sourcing",
      "home.guide.title": "Buying &amp; Supplying",
      "home.guide.sub": "Find ingredients and check supply terms.",
      "home.g1": "Search",
      "home.g1d": "Find makers and supply details for food, pharma and cosmetic ingredients.",
      "home.g2": "Inquiries",
      "home.g2d": "Can't find it? Post an inquiry to check availability.",
      "home.g3": "Samples &amp; Quotes",
      "home.g3d": "Request samples and quotes from listed suppliers.",
      "home.g4": "List as a Supplier",
      "home.g4d": "Send us your product list and we'll get you listed.",
      "home.cta.title": "Want to know more?",
      "home.cta.about": "About Allingre",
      "home.cta.contact": "Contact us",
      "search.title": "Find Ingredients",
      "search.desc": "Search food, pharma and cosmetic ingredients, then request samples and quotes.",
      "filter.title": "Filter",
      "filter.reset": "Reset",
      "filter.type": "Type",
      "sector.food": "Food",
      "sector.pharma": "Pharma",
      "sector.cosmetic": "Cosmetics",
      "gb.title": "Group buy",
      "gb.desc": "Pool your order with other buyers<br class=\"po-br\" /> to reach a supplier's minimum order quantity.",
      "gb.hero.cta": "Start a group buy",
      "gb.step1": "Request the item",
      "gb.step2": "Allingre sets the MOQ",
      "gb.step3": "Buyers pledge volume",
      "gb.step4": "MOQ met – order placed",
      "gb.privacy": "Buyers never see each other's name, company or contact details. Only the volumes are shown.",
      "gb.maker": "Leave the manufacturer blank and Allingre will find one and tell you. If you are not happy with the manufacturer chosen, you can withdraw your volume any time while the group buy is open.",
      "gb.search": "Search group buys",
      "gb.write": "Start a group buy",
    },
    zh: {
      "home.hero.title": "原料采购<br />更简单、更快速",
      "home.hero.desc": "在一个平台找到食品、医药、化妆品原料与供应商，<br class=\"po-br\" />立即索取样品和报价。",
      "home.search.placeholder": "搜索原料名称或关键词",
      "search.button": "搜索",
      "home.popular": "热门原料：",
      "home.check1": "买家免费使用",
      "home.check2": "样品 · 报价即时申请",
      "home.check3": "国内外原料供应商",
      "home.aud.title": "Allingre 适合这些用户",
      "home.aud1": "食品<br />制造商",
      "home.aud2": "制药企业 ·<br />原料药采购",
      "home.aud3": "化妆品<br />品牌 · 制造商",
      "home.aud4": "研发 ·<br />OEM · ODM",
      "home.aud5": "原料供应商 ·<br />经销商",
      "home.how.title": "Allingre 使用方法",
      "home.step1": "搜索 · 比较",
      "home.step1d": "在一个平台查找并比较原料与供应商",
      "home.step2": "申请样品 · 报价",
      "home.step2d": "直接向供应商申请样品和报价",
      "home.step3": "采购支持",
      "home.step3d": "找不到所需原料？提交采购需求",
      "home.step4": "推进交易",
      "home.step4d": "与供应商直接协商交易条件",
      "home.how.cta": "免费开始使用",
      "home.mock.query": "维生素 D3",
      "home.mock.r1": "维生素 D3 100,000 IU",
      "home.mock.o1": "德国",
      "home.mock.r2": "维生素 D3 油剂",
      "home.mock.o2": "瑞士",
      "home.mock.r3": "维生素 D3 粉末",
      "home.mock.o3": "印度",
      "home.mock.cta": "申请样品 · 报价",
      "req.title": "采购需求表",
      "req.example": "填写示例",
      "req.name": "原料名称",
      "req.vitd": "维生素 D3",
      "req.sector": "领域",
      "req.qty": "需求量",
      "req.qtyv": "每月 500kg",
      "req.sample": "样品数量",
      "req.docs": "所需文件",
      "req.submit": "提交",
      "req.s1": "提交需求",
      "req.s2": "Allingre 确认",
      "req.s3": "查看答复",
      "req.toast": "已收到答复",
      "req.toastd": "维生素 D3 · 进度已更新",
      "home.dark.eyebrow": "原料采购需求",
      "home.dark.title": "找不到所需原料？<br />请提交采购需求",
      "home.dark.desc": "留下原料名称、数量和规格，我们为您对接可供货的企业。",
      "home.dark.p1": "需求与进度仅对本人显示",
      "home.dark.p2": "需求量 · 样品 · 文件条件一次填写",
      "home.dark.p3": "收到答复后可在采购需求页面查看",
      "home.dark.cta": "提交采购需求",
      "home.guide.title": "原料采购与供应指南",
      "home.guide.sub": "找到所需原料，确认供应条件。",
      "home.g1": "原料搜索",
      "home.g1d": "查看食品、医药、化妆品原料的制造商与供应信息。",
      "home.g2": "原料咨询",
      "home.g2d": "找不到所需原料？留下咨询确认供货情况。",
      "home.g3": "样品 · 报价",
      "home.g3d": "在原料列表中向供应商申请样品和报价。",
      "home.g4": "供应商登记",
      "home.g4d": "发送产品清单，我们协助您完成原料登记。",
      "home.cta.title": "想了解更多？",
      "home.cta.about": "关于 Allingre",
      "home.cta.contact": "联系我们",
      "search.title": "原料搜索",
      "search.desc": "搜索食品、医药、化妆品原料，并申请样品与报价。",
      "filter.title": "筛选",
      "filter.reset": "重置",
      "filter.type": "类别",
      "sector.food": "食品",
      "sector.pharma": "医药",
      "sector.cosmetic": "化妆品",
      "gb.title": "联合采购",
      "gb.desc": "采购量较小、难以单独下单的原料，<br class=\"po-br\" />由多位买家共同凑齐最小起订量。",
      "gb.hero.cta": "发起联合采购",
      "gb.step1": "提交品项需求",
      "gb.step2": "Allingre 指定 MOQ",
      "gb.step3": "买家认购数量",
      "gb.step4": "达成后下单采购",
      "gb.privacy": "参与的买家之间无法得知对方的姓名、公司和联系方式，仅以匿名方式显示数量。",
      "gb.maker": "未指定制造商时，由 Allingre 选定可供货的制造商并通知您。若对选定的制造商不满意，在募集期间可随时取消认购数量。",
      "gb.search": "搜索联合采购",
      "gb.write": "发起联合采购",
    },
    ja: {
      "home.hero.title": "原料調達を<br />もっと簡単に、速く",
      "home.hero.desc": "食品・医薬品・化粧品の原料とサプライヤーを一か所で探し、<br class=\"po-br\" />サンプルと見積をすぐに依頼できます。",
      "home.search.placeholder": "原料名・キーワードで検索",
      "search.button": "検索",
      "home.popular": "人気の原料：",
      "home.check1": "バイヤーは無料",
      "home.check2": "サンプル・見積をすぐ依頼",
      "home.check3": "国内外のサプライヤー",
      "home.aud.title": "Allingre はこんな方のために",
      "home.aud1": "食品<br />メーカー",
      "home.aud2": "製薬会社 ·<br />原薬の調達",
      "home.aud3": "化粧品<br />ブランド · メーカー",
      "home.aud4": "研究開発 ·<br />OEM · ODM",
      "home.aud5": "原料サプライヤー ·<br />商社",
      "home.how.title": "Allingre の使い方",
      "home.step1": "検索・比較",
      "home.step1d": "原料とサプライヤーを一か所で比較できます",
      "home.step2": "サンプル・見積依頼",
      "home.step2d": "サプライヤーに直接依頼できます",
      "home.step3": "調達サポート",
      "home.step3d": "見つからない原料は調達依頼を出せます",
      "home.step4": "取引の開始",
      "home.step4d": "サプライヤーと直接条件を調整します",
      "home.how.cta": "無料ではじめる",
      "home.mock.query": "ビタミン D3",
      "home.mock.r1": "ビタミン D3 100,000 IU",
      "home.mock.o1": "ドイツ",
      "home.mock.r2": "ビタミン D3 オイル",
      "home.mock.o2": "スイス",
      "home.mock.r3": "ビタミン D3 パウダー",
      "home.mock.o3": "インド",
      "home.mock.cta": "サンプル・見積依頼",
      "req.title": "調達依頼書",
      "req.example": "記入例",
      "req.name": "原料名",
      "req.vitd": "ビタミン D3",
      "req.sector": "分野",
      "req.qty": "必要数量",
      "req.qtyv": "月 500kg",
      "req.sample": "サンプル数量",
      "req.docs": "必要書類",
      "req.submit": "登録する",
      "req.s1": "依頼を登録",
      "req.s2": "Allingre 確認",
      "req.s3": "回答を確認",
      "req.toast": "回答が登録されました",
      "req.toastd": "ビタミン D3 · 進捗を更新",
      "home.dark.eyebrow": "原料の調達依頼",
      "home.dark.title": "探している原料が<br />見つかりませんか",
      "home.dark.desc": "原料名・数量・規格をお知らせいただければ、供給可能な企業をお探しします。",
      "home.dark.p1": "依頼と進捗はご本人にのみ表示",
      "home.dark.p2": "必要数量・サンプル・書類条件をまとめて",
      "home.dark.p3": "回答は調達依頼ページですぐ確認",
      "home.dark.cta": "調達を依頼する",
      "home.guide.title": "原料の購入・供給案内",
      "home.guide.sub": "必要な原料を探し、供給条件を確認しましょう。",
      "home.g1": "原料検索",
      "home.g1d": "食品・医薬品・化粧品原料のメーカーと供給情報を確認できます。",
      "home.g2": "原料のお問い合わせ",
      "home.g2d": "見つからない原料は、お問い合わせで供給可否を確認できます。",
      "home.g3": "サンプル・見積",
      "home.g3d": "原料一覧からサプライヤーにサンプルと見積を依頼できます。",
      "home.g4": "サプライヤー登録",
      "home.g4d": "製品リストをお送りいただければ原料登録をお手伝いします。",
      "home.cta.title": "もっと知りたいですか？",
      "home.cta.about": "Allingre について",
      "home.cta.contact": "お問い合わせ",
      "search.title": "原料を探す",
      "search.desc": "食品・医薬品・化粧品の原料を検索し、サンプルと見積を依頼できます。",
      "filter.title": "絞り込み",
      "filter.reset": "リセット",
      "filter.type": "分野",
      "sector.food": "食品",
      "sector.pharma": "医薬品",
      "sector.cosmetic": "化粧品",
      "gb.title": "共同購入",
      "gb.desc": "数量が少なく単独では購入しにくい原料を、<br class=\"po-br\" />複数のバイヤーで最低発注数量まで集めます。",
      "gb.hero.cta": "共同購入を依頼する",
      "gb.step1": "品目を依頼",
      "gb.step2": "Allingre が MOQ を設定",
      "gb.step3": "バイヤーが数量を登録",
      "gb.step4": "達成したら発注",
      "gb.privacy": "参加したバイヤー同士は互いの名前・会社・連絡先が分かりません。数量のみ匿名で表示されます。",
      "gb.maker": "メーカーを指定しない場合は、Allingre が供給可能なメーカーを選んでお知らせします。指定されたメーカーにご納得いただけない場合は、募集中はいつでも数量を取り消せます。",
      "gb.search": "共同購入を検索",
      "gb.write": "共同購入を依頼",
    },
    vi: {
      "home.hero.title": "Tìm nguồn nguyên liệu<br />nhanh và dễ dàng",
      "home.hero.desc": "Tìm nguyên liệu và nhà cung cấp thực phẩm, dược phẩm, mỹ phẩm tại một nơi.<br class=\"po-br\" /> Yêu cầu mẫu và báo giá ngay.",
      "home.search.placeholder": "Tìm theo tên nguyên liệu hoặc từ khóa",
      "search.button": "Tìm kiếm",
      "home.popular": "Phổ biến:",
      "home.check1": "Miễn phí cho người mua",
      "home.check2": "Yêu cầu mẫu &amp; báo giá ngay",
      "home.check3": "Nhà cung cấp trong và ngoài nước",
      "home.aud.title": "Allingre dành cho ai",
      "home.aud1": "Nhà sản xuất<br />thực phẩm",
      "home.aud2": "Công ty dược ·<br />mua nguyên liệu API",
      "home.aud3": "Thương hiệu ·<br />nhà sản xuất mỹ phẩm",
      "home.aud4": "R&amp;D ·<br />OEM · ODM",
      "home.aud5": "Nhà cung cấp ·<br />nhà phân phối",
      "home.how.title": "Cách Allingre hoạt động",
      "home.step1": "Tìm &amp; so sánh",
      "home.step1d": "Tìm và so sánh nguyên liệu, nhà cung cấp tại một nơi",
      "home.step2": "Yêu cầu mẫu &amp; báo giá",
      "home.step2d": "Liên hệ trực tiếp với nhà cung cấp",
      "home.step3": "Hỗ trợ tìm nguồn",
      "home.step3d": "Không tìm thấy? Gửi yêu cầu tìm nguồn",
      "home.step4": "Chốt giao dịch",
      "home.step4d": "Thỏa thuận điều kiện trực tiếp với nhà cung cấp",
      "home.how.cta": "Bắt đầu miễn phí",
      "home.mock.query": "Vitamin D3",
      "home.mock.r1": "Vitamin D3 100,000 IU",
      "home.mock.o1": "Đức",
      "home.mock.r2": "Dầu Vitamin D3",
      "home.mock.o2": "Thụy Sĩ",
      "home.mock.r3": "Bột Vitamin D3",
      "home.mock.o3": "Ấn Độ",
      "home.mock.cta": "Yêu cầu mẫu · báo giá",
      "req.title": "Phiếu yêu cầu tìm nguồn",
      "req.example": "Ví dụ",
      "req.name": "Nguyên liệu",
      "req.vitd": "Vitamin D3",
      "req.sector": "Lĩnh vực",
      "req.qty": "Số lượng",
      "req.qtyv": "500 kg / tháng",
      "req.sample": "Lượng mẫu",
      "req.docs": "Hồ sơ",
      "req.submit": "Gửi",
      "req.s1": "Đã gửi",
      "req.s2": "Allingre xác nhận",
      "req.s3": "Xem phản hồi",
      "req.toast": "Đã nhận phản hồi",
      "req.toastd": "Vitamin D3 · cập nhật tiến độ",
      "home.dark.eyebrow": "Yêu cầu tìm nguồn",
      "home.dark.title": "Không tìm thấy<br />nguyên liệu bạn cần?",
      "home.dark.desc": "Để lại tên, số lượng và quy cách — chúng tôi sẽ tìm nhà cung cấp phù hợp.",
      "home.dark.p1": "Chỉ bạn thấy yêu cầu của mình",
      "home.dark.p2": "Số lượng, mẫu và hồ sơ trong một biểu mẫu",
      "home.dark.p3": "Phản hồi hiện trên trang tìm nguồn của bạn",
      "home.dark.cta": "Gửi yêu cầu tìm nguồn",
      "home.guide.title": "Mua &amp; cung cấp nguyên liệu",
      "home.guide.sub": "Tìm nguyên liệu và kiểm tra điều kiện cung cấp.",
      "home.g1": "Tìm nguyên liệu",
      "home.g1d": "Xem nhà sản xuất và thông tin cung cấp nguyên liệu thực phẩm, dược phẩm, mỹ phẩm.",
      "home.g2": "Hỏi đáp nguyên liệu",
      "home.g2d": "Không tìm thấy? Gửi câu hỏi để kiểm tra khả năng cung cấp.",
      "home.g3": "Mẫu &amp; báo giá",
      "home.g3d": "Yêu cầu mẫu và báo giá từ nhà cung cấp trong danh sách.",
      "home.g4": "Đăng ký nhà cung cấp",
      "home.g4d": "Gửi danh mục sản phẩm, chúng tôi sẽ hỗ trợ đăng nguyên liệu.",
      "home.cta.title": "Muốn biết thêm?",
      "home.cta.about": "Về Allingre",
      "home.cta.contact": "Liên hệ",
      "search.title": "Tìm nguyên liệu",
      "search.desc": "Tìm nguyên liệu thực phẩm, dược phẩm, mỹ phẩm rồi yêu cầu mẫu và báo giá.",
      "filter.title": "Bộ lọc",
      "filter.reset": "Đặt lại",
      "filter.type": "Lĩnh vực",
      "sector.food": "Thực phẩm",
      "sector.pharma": "Dược phẩm",
      "sector.cosmetic": "Mỹ phẩm",
      "gb.title": "Mua chung",
      "gb.desc": "Gộp đơn với những người mua khác<br class=\"po-br\" /> để đạt số lượng đặt hàng tối thiểu của nhà cung cấp.",
      "gb.hero.cta": "Tạo đơn mua chung",
      "gb.step1": "Gửi yêu cầu mặt hàng",
      "gb.step2": "Allingre đặt MOQ",
      "gb.step3": "Người mua đăng ký số lượng",
      "gb.step4": "Đạt MOQ – tiến hành đặt hàng",
      "gb.privacy": "Người mua không thấy tên, công ty hay thông tin liên hệ của nhau. Chỉ số lượng được hiển thị ẩn danh.",
      "gb.maker": "Nếu bạn không chỉ định nhà sản xuất, Allingre sẽ chọn một nhà sản xuất có thể cung cấp và thông báo cho bạn. Nếu không hài lòng với nhà sản xuất được chọn, bạn có thể hủy số lượng bất cứ lúc nào khi đơn còn mở.",
      "gb.search": "Tìm đơn mua chung",
      "gb.write": "Tạo đơn mua chung",
    },
  };

  // Short words for text the scripts render later (result cards, detail
  // panel). Matched on a whole text node only.
  const GLOSSARY = {
    en: {
      exact: {
        "샘플 요청": "Sample",
        "견적 문의": "Quote",
        "쪽지 보내기": "Message",
        "제조국": "Origin",
        "제조사": "Maker",
        "공급사": "Supplier",
        "공급사 홈페이지": "Website",
        "공급사 이메일": "Email",
        "리드타임": "Lead time",
        "비공개": "Private",
        "확인 필요": "TBC",
        "규격 확인 필요": "Spec TBC",
        "제조국 확인 필요": "Origin TBC",
        "비공개 시 제조국만 노출됩니다.": "Only the country is shown.",
        "상세 정보는 공급사에 문의하세요": "Ask the supplier for details",
        "식품": "Food",
        "제약": "Pharma",
        "화장품": "Cosmetics",
        "전체 원료": "All ingredients",
        "· 공급사": "· suppliers",
        "원료 · 공급사": "ingredients · suppliers",
        "다음": "Next",
        "원료를 검색하고 있습니다...": "Searching…",
        "조건에 맞는 원료가 없습니다. 검색어 또는 필터를 줄여보세요.": "No matches. Try a broader search.",
      },
      patterns: [[/^([\d,]+)개 원료$/, "$1 results"]],
    },
  };

  const PREFIX_PATTERN = /^\/(en|zh|ja|vi)(?=\/|$)/;
  const prefixMatch = window.location.pathname.match(PREFIX_PATTERN);
  const current = LANGUAGES.find((lang) => lang.prefix === (prefixMatch ? prefixMatch[1] : "")) || LANGUAGES[0];
  const prefixPath = current.prefix ? `/${current.prefix}` : "";
  const basePath = window.location.pathname.replace(PREFIX_PATTERN, "") || "/";

  // Google Translate rewrites the page in bursts of hundreds of mutations.
  // Reacting to each one ran a TreeWalker per mutation and rewrote text while
  // the translator was still moving it — the page stuttered and Chinese text
  // landed in the wrong place. Work is collected and run once per frame, with
  // the observer detached while it writes so it never re-triggers itself.
  const observeBatched = (target, options, handle) => {
    let pending = new Set();
    let scheduled = false;
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "characterData") pending.add(record.target.parentElement);
        else record.addedNodes.forEach((node) => pending.add(node.nodeType === 3 ? node.parentElement : node));
      });
      if (scheduled || !pending.size) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const roots = pending;
        pending = new Set();
        observer.disconnect();
        roots.forEach((root) => {
          if (root) handle(root);
        });
        observer.observe(target, options);
      });
    });
    observer.observe(target, options);
    return observer;
  };

  // "/en" → "/en/" so relative links (search.html) stay under the prefix.
  if (current.prefix && window.location.pathname === prefixPath) {
    history.replaceState(null, "", `${prefixPath}/${window.location.search}${window.location.hash}`);
  }

  const withPrefix = (path) => {
    if (!current.prefix || !path.startsWith("/") || path.startsWith("//") || PREFIX_PATTERN.test(path)) return path;
    if (/^\/(api|fonts|images|videos)\//.test(path)) return path;
    return `${prefixPath}${path}`;
  };

  // ---------- Translation cookie ----------
  const host = window.location.hostname;
  const cookieDomains = ["", host, `.${host.replace(/^www\./, "")}`];
  const clearCookie = () => {
    cookieDomains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  };

  // Fonts follow SK hynix per language; Noto Sans KR and Roboto load on
  // every page, the Japanese / Chinese faces only when that language is on.
  // Chinese uses the system font stack (as cxmt.com does), so nothing loads.
  const EXTRA_FONTS = {
    en: "Barlow:wght@300;400;500;600;700",
    ja: "Noto+Sans+JP:wght@300;400;500;700",
  };
  if (EXTRA_FONTS[current.prefix]) {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = `https://fonts.googleapis.com/css2?family=${EXTRA_FONTS[current.prefix]}&display=swap`;
    document.head.appendChild(fontLink);
  }

  if (current.prefix) {
    clearCookie();
    document.cookie = `googtrans=/ko/${current.google}; path=/`;
    document.documentElement.lang = current.html;
  } else if (/(?:^|;\s*)googtrans=/.test(document.cookie)) {
    clearCookie();
  }

  // ---------- Hand-written copy for this language ----------
  const pageText = PAGE_TEXT[current.prefix];
  if (pageText) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const text = pageText[el.dataset.i18n];
      if (text == null) return;
      el.innerHTML = text;
      el.setAttribute("translate", "no");
      el.classList.add("notranslate");
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const text = pageText[el.dataset.i18nPlaceholder];
      if (text != null) el.placeholder = text;
    });
  }

  const glossary = GLOSSARY[current.prefix];
  if (glossary) {
    const lookup = (text) => {
      if (glossary.exact[text]) return glossary.exact[text];
      const hit = glossary.patterns.find(([pattern]) => pattern.test(text));
      return hit ? text.replace(hit[0], hit[1]) : "";
    };
    // Each replaced text node becomes its own no-translate span, so the
    // rest of its parent (e.g. a country name next to "제조국") still gets
    // machine-translated.
    const applyGlossary = (root) => {
      if (!root || root.nodeType !== 1 || root.closest(".notranslate")) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const hits = [];
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const text = node.nodeValue.trim();
        const next = text && lookup(text);
        if (next && !node.parentElement.closest(".notranslate")) hits.push([node, next]);
      }
      hits.forEach(([node, next]) => {
        const span = document.createElement("span");
        span.className = "notranslate";
        span.setAttribute("translate", "no");
        span.textContent = node.nodeValue.replace(node.nodeValue.trim(), next);
        node.replaceWith(span);
      });
    };
    const main = document.querySelector("main") || document.body;
    applyGlossary(main);
    observeBatched(main, { childList: true, subtree: true }, applyGlossary);
  }

  // Internal absolute links (also ones rendered later) keep the prefix.
  if (current.prefix) {
    document.addEventListener(
      "click",
      (event) => {
        const link = event.target.closest && event.target.closest("a[href^='/']");
        if (!link || link.closest(".lang-switch")) return;
        const href = link.getAttribute("href");
        const next = withPrefix(href);
        if (next !== href) link.setAttribute("href", next);
      },
      true,
    );
  }

  // Hero buttons that stand in for an existing button further down the page
  // (e.g. 요청 등록), so the page's own logic — login checks included — runs.
  document.addEventListener("click", (event) => {
    const proxy = event.target.closest && event.target.closest("[data-click-target]");
    if (!proxy) return;
    const target = document.querySelector(proxy.dataset.clickTarget);
    if (!target) return;
    target.click();
    const form = target.closest("section") || target;
    window.setTimeout(() => form.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  });

  if (!header) {
    if (current.prefix) loadGoogleTranslate();
    return;
  }

  const SEARCH_ICON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const GLOBE_ICON =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

  const brand = header.querySelector(".brand");
  if (brand) {
    brand.setAttribute("translate", "no");
    brand.classList.add("notranslate");
  }

  let actions = header.querySelector(".header-actions");
  if (!actions) {
    actions = document.createElement("div");
    actions.className = "header-actions";
    header.appendChild(actions);
  }

  // ---------- 공급사 menu (like Pharmaoffer's "For suppliers") ----------
  // 원료 등록 moves out of the main nav into this menu. The existing link
  // element is moved, not copied, so script.js can still update its href.
  const nav = header.querySelector(".main-nav");
  const navRegister =
    (nav && nav.querySelector(".ingredient-register-nav")) ||
    (nav && [...nav.querySelectorAll("a")].find((link) => link.textContent.trim() === "원료 등록"));
  const registerLink = navRegister || document.createElement("a");
  if (!navRegister) {
    registerLink.className = "ingredient-register-nav";
    registerLink.href = "/ingredient-register.html";
    registerLink.textContent = "원료 등록";
  }
  registerLink.setAttribute("role", "menuitem");
  const supplier = document.createElement("div");
  supplier.className = "supplier-menu";
  supplier.innerHTML =
    '<button class="supplier-toggle" type="button" aria-haspopup="true" aria-expanded="false">공급사<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>' +
    '<div class="supplier-dropdown" role="menu" hidden></div>';
  const supplierDropdown = supplier.querySelector(".supplier-dropdown");
  const guideLink = document.createElement("a");
  guideLink.href = "/intro.html#supplier-onboarding";
  guideLink.setAttribute("role", "menuitem");
  guideLink.textContent = "공급사 등록 안내";
  supplierDropdown.append(registerLink, guideLink);
  if (nav) nav.after(supplier);
  else header.insertBefore(supplier, actions);
  const supplierToggle = supplier.querySelector(".supplier-toggle");
  const setSupplierOpen = (open) => {
    supplierDropdown.hidden = !open;
    supplierToggle.setAttribute("aria-expanded", String(open));
  };
  supplierToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setSupplierOpen(supplierDropdown.hidden);
  });
  document.addEventListener("click", (event) => {
    if (!supplier.contains(event.target)) setSupplierOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSupplierOpen(false);
  });

  // ---------- Search box: always goes to the ingredient search page ----------
  const labels = LABELS[current.prefix] || {};
  const form = document.createElement("form");
  form.className = "header-search notranslate";
  form.setAttribute("translate", "no");
  form.action = withPrefix("/search.html");
  form.method = "get";
  form.setAttribute("role", "search");
  form.innerHTML =
    `<input type="search" name="search" placeholder="${labels.placeholder || "원료명 · 공급사 검색"}" aria-label="원료 검색" autocomplete="off" />` +
    `<button type="submit" aria-label="검색">${SEARCH_ICON}</button>`;
  const query = new URLSearchParams(window.location.search).get("search");
  if (query && /\/search(\.html)?$/.test(basePath)) {
    form.querySelector("input").value = query;
  }
  form.addEventListener("submit", (event) => {
    if (!form.querySelector("input").value.trim()) event.preventDefault();
  });
  header.insertBefore(form, actions);

  // ---------- Language menu ----------
  const target = (lang) => `${lang.prefix ? `/${lang.prefix}` : ""}${basePath}${window.location.search}${window.location.hash}`;
  const lang = document.createElement("div");
  lang.className = "lang-switch notranslate";
  lang.setAttribute("translate", "no");
  lang.innerHTML =
    `<button class="lang-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="언어 선택 / Language">${GLOBE_ICON}</button>` +
    '<ul class="lang-menu" role="menu" hidden>' +
    LANGUAGES.map(
      (item) =>
        `<li role="none"><a role="menuitem" hreflang="${item.html}" href="${target(item)}"${item === current ? ' aria-current="true"' : ""}>${item.label}</a></li>`,
    ).join("") +
    "</ul>";
  actions.appendChild(lang);

  const toggle = lang.querySelector(".lang-toggle");
  const menu = lang.querySelector(".lang-menu");
  const setOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });
  document.addEventListener("click", (event) => {
    if (!lang.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  // ---------- Header labels in the chosen language ----------
  if (current.prefix) {
    [nav, supplier, actions].forEach((node) => {
      if (!node) return;
      node.setAttribute("translate", "no");
      node.classList.add("notranslate");
    });
    const relabel = () => {
      [nav, supplier, actions].forEach((root) => {
        if (!root) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const text = node.nodeValue.trim();
          if (text && labels[text]) node.nodeValue = node.nodeValue.replace(text, labels[text]);
        }
      });
    };
    relabel();
    // script.js rewrites the account links after sign-in checks.
    const headerOptions = { childList: true, subtree: true, characterData: true };
    let relabelScheduled = false;
    const headerObserver = new MutationObserver(() => {
      if (relabelScheduled) return;
      relabelScheduled = true;
      requestAnimationFrame(() => {
        relabelScheduled = false;
        headerObserver.disconnect();
        relabel();
        headerObserver.observe(header, headerOptions);
      });
    });
    headerObserver.observe(header, headerOptions);
    loadGoogleTranslate();
  }

  // Chinese: drop the full stops (。) machine translation adds, which look
  // fussy in short UI text. Mid-text ones become a space.
  if (current.prefix === "zh") {
    const stripStops = (root) => {
      if (!root || root.nodeType !== 1) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        if (!node.nodeValue.includes("。")) continue;
        node.nodeValue = node.nodeValue.replace(/。\s*$/, "").replace(/。\s*/g, " ");
      }
    };
    stripStops(document.body);
    observeBatched(document.body, { childList: true, subtree: true, characterData: true }, stripStops);
  }

  function loadGoogleTranslate() {
    if (document.getElementById("google_translate_element")) return;
    const holder = document.createElement("div");
    holder.id = "google_translate_element";
    holder.hidden = true;
    document.body.appendChild(holder);
    window.__initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "ko", autoDisplay: false },
        "google_translate_element",
      );
    };
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=__initGoogleTranslate";
    script.async = true;
    document.head.appendChild(script);
  }
})();
