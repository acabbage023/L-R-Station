// 国际化/语言切换功能
const translations = {
    zh: {
        'welcome-title': '欢迎来到听读小站！',
        'welcome-desc': '这是一个帮助高中生提升英语阅读与听力的精选资源平台。你可以通过测试了解自己的水平，再找到适合的资源。',
        'vocab-test': '词汇量测试',
        'vocab-test-desc': '测试你的英语词汇量水平',
        'level-test': '阅读/听力水平测试',
        'level-test-desc': '了解你的英语阅读和听力水平',
        'browse-resources': '浏览资源',
        'browse-resources-desc': '跳过测试，直接浏览精选资源',
        'take-test': '开始测试',
        'browse-now': '立即浏览',
        'about-site': '关于本站',
        'back-home': '返回首页',
        'search-placeholder': '搜索资源...',
        'filter-type': '按类型：',
        'filter-level': '按难度：',
        'all': '全部',
        'reading': '阅读',
        'listening': '听力',
        'no-results': '未找到匹配的资源',
        'back-to-resources': '← 返回资源列表',
        'about-title': '关于本站',
        'about-intro-title': '听读小站是什么？',
        'about-intro-desc-1': '听读小站是一个专注于分享优质英语听力与阅读资源的网站。我们希望帮助英语学习者通过测试快速了解自身水平，并基于兴趣和能力匹配到真正适合的输入材料，从而提升学习效率、减少摸索时间。\n\n',
        'about-intro-desc-2': '在英语学习的过程中，很多人并不是缺乏学习意愿，而是缺少“够多且合适”的输入资源。根据著名语言学家Dr.Krashen 的理论，足量的可理解输入是习得流畅、自然语言能力的关键。现在网上推荐的列表和视频很多，但很少有平台能系统、分级、全面地整理高质量的听读材料。听读小站正是为了解决这一问题而诞生：帮助你跨过“找资源”这一核心难关，而坚持学习的部分，则需要你自己的努力。\n\n',
        'about-intro-desc-3': '虽然最初的想法来自于帮助身边准备托福雅思的同学，但其实这里整理的资源适用于几乎所有英语学习者——从自学者，到正在备考、希望提升听读能力的任何人。',
        'author-experience': '作者学习经历',
        'author-experience-desc': '“It is only books that provide an unlimited amount of repetition. It is only reading that can be returned again and again without being an ordeal.” 一个平常的下午，彼时九年级的我正在Bilibili上刷着视频，偶然间看到了一个视频里的这句话。我不会想到这句话会彻底改变我。\n\n那是一个中国英语演讲冠军在介绍“如何永远学会一个单词？”。这个视频中的理念很新颖，讲到了根据众多语言学家的研究，积累单词最好的办法就是通过大量的阅读，在变化的语境中不断遇到这些单词——这也是母语学习者的学习道路。这个观念深深地震撼与吸引了我。我“搜根问底”，又看了这个up主其他关于语言学习的视频，他依旧是整理了很多语言学研究成果，告诉我不光是记单词，听说读写，大量的可理解输入才是真正高效的进步途径。\n\n那时候，由于转到国际路线的决定，我正处于一个迫切需要提升英语的时期。虽然我的中考英语成绩还不错，但对于标化考试和出国留学来说，那样的能力显然远远不够。\n\n一开始，我并不知道到底该如何努力。于是和很多我身边的同学的选择一样，我也跟爸妈说去报班学，但是事实证明，我真的真的很不喜欢这种上课模式。我没法集中听两个小时的语法，没法死记硬背托福必背4000词，更没法忍受一直被助教老师催促的窒息感。于是一节课之后，我退出了，又变成了一只无头苍蝇。但我很幸运，在那个平凡的午后看到了那个视频，并且不仅仅是看到，而是被触动到了——我愿意去按照视频里提到的模式做起来。\n\n于是我开始了追赶，追逐那些我曾觉得遥不可及的繁星。我制定了打卡计划，每天至少听一集英语播客（通常是在运动或者通勤的时候）、看五分钟原版书籍，从Englishpod和Magic Tree House开始，到更多英文纪录片、英文电影，以及整个英文世界——除了每天固定的听读输入外，我也把所有电子设备上的系统和app都调成英文的，用英文在Steam上下游戏、看游戏规则，听英语的League of Legends比赛解说。我虽然现在还未成功、仍在路上，英语学习其实也从来不止于标化，它是终身的道路。但我觉得，我走在一条正确的提升之路上。\n\n……\n\n这是两年前（大概是2024年4月）我写下的文字。当时，我只不过刚刚在这条路上启程了一段时间。虽说我觉得自己在正确的路上，但未来究竟怎样，我心里其实也没有底。现在回望，还是挺感慨的。\n\n2024年的3月2号，我开始“输入”的8个月后，我考了第一次托福，69分。2025年的3月1号，我考了第二次托福，99分，期间没有上过一节托福的课程。在2025年的10月21号，我开始输入的两年又三个月后，我心跳加速地打开了最新一次考试的查分界面：109分，阅读和听力满分。老师们说我的经历很传奇，因为我从头到尾只在最后上了两节口语和两节写作的课。结果确实不平凡，但我更希望它能变成更多人的传奇。我的阶段性成功虽然短时间内让我很开心，但能帮到更多的人，尤其是我身边还在为学英语而挣扎的同学们，应该会是一件更令我骄傲的事情吧。\n\n谢谢看到这里的你。如果你也正在迷茫、困惑、怀疑自己能不能学好英语，我想对你说：我曾站在同一个起点。我也不是天赋型选手，我只是找到了适合自己的方法，然后坚持了足够久。如果你也觉得这个方法不错，不如就从今天开始试一试，哪怕只读一页书、只听一分钟。或许这个方法最终会成为你的方式，或许它只会成为你探索路上的一个起点——但没关系，重要的是出发。愿你在不断试错中找到属于自己的节奏，并在某一天回望来路时，带着同样的惊喜与骄傲。',
        'references': '参考文献',
        'references-desc': '本站收录的资源均来自公开渠道，包括YouTube、TED、BBC等知名平台。所有资源链接均指向原始来源，本站仅作为导航和推荐平台。',
        'acknowledgements-title': '致谢',
        'acknowledgements-desc': '感谢指导老师川溪老师在本项目中给予的指导与帮助；感谢行空老师、木酱老师、Benny老师、Tyler同学提供的网站搭建和技术支持；感谢Cursor提供的网站开发工具；同时感谢所有在这个项目中提出建议与反馈的老师和同学们。正是你们的协助，使听读小站得以不断完善！',
        'visit-link': '访问资源',
        'description': '详细介绍：',
        'assessment-intro': '为了更好地选择适合你的内容，我们为大家准备了两个简单实用的测试工具。',
        'assessment-vocab-title': '一、词汇量测试：了解你的英语词汇水平',
        'assessment-vocab-desc': '词汇量测试可以帮助你快速判断目前的英语词汇基础。以下是分数区间对应的参考资源等级：',
        'assessment-vocab-range-1': '0–2000： 建议从 Elementary（初级） 资源开始',
        'assessment-vocab-range-2': '2000–5500： 适合 Lower-Intermediate（中下级） 资源',
        'assessment-vocab-range-3': '5500–6500： 适合 Intermediate（中级） 资源',
        'assessment-vocab-range-4': '6500–8000： 适合 Upper-Intermediate（中上级） 资源',
        'assessment-vocab-range-5': '8000+： 可以挑战 Advanced（高级） 资源',
        'assessment-efset-title': '二、阅读/听力水平测试（EF SET）：评估你的综合英语能力',
        'assessment-efset-desc-1': 'EF标准英语测试可以测出你的整体英语水平。',
        'assessment-efset-desc-2': '时间有限的同学可以选择 50分钟版本，主要测试听力与阅读。',
        'assessment-efset-desc-3': '时间充裕的同学可以选择 90分钟完整版，涵盖听、说、读、写四项技能，获得更全面的评估结果。',
        'assessment-efset-desc-4': '根据测试中的听读成绩，可参考以下等级进行资源选择（实际情况因人而异，可灵活调整）：',
        'assessment-efset-level-a1a2': 'A1–A2： 初级（Elementary）',
        'assessment-efset-level-b1': 'B1： 中下级（Lower-Intermediate）',
        'assessment-efset-level-b2': 'B2： 中级（Intermediate）',
        'assessment-efset-level-c1': 'C1： 中上级（Upper-Intermediate）',
        'assessment-efset-level-c2': 'C2： 高级（Advanced）',
        'no-resource-title': '如果你没有找到适合你的资源，你可以：',
        'no-resource-item-1': '询问AI：下面是一个可以参考的模版：“我对……感兴趣，我目前的英语水平是……，请给我推荐一些相关的听读资源。”\n',
        'no-resource-item-2': '自行搜索：根据自己的主题兴趣或水平关键词，在各类平台查找适合的材料。\n',
        'no-resource-item-3': '参考优质创作者推荐：小站也整理了一些英语学习经验丰富、分享质量高的 up 主，你可以从他们的内容中获取灵感。\n',
        'no-resource-item-4': '利用身边的人脉：向老师、同学或英语水平较高的朋友请教，也能获得很好的资源推荐。\n',
        'recommend-resource-title': '如果你有值得推荐的优质资源\n',
        'recommend-resource-desc-1': '欢迎将你认为不错的内容分享给大家！请提供以下信息后发送至邮箱 a_cabbage@qq.com：\n',
        'recommend-resource-item-1': '你估算的资源难度（按首页难度等级分层即可）\n',
        'recommend-resource-item-2': '资源名称\n',
        'recommend-resource-item-3': '对所有人开放的资源链接\n',
        'recommend-resource-desc-2': '我们会尽快审核并决定是否添加到网站中。\n',
        'other-suggestions-title': '其他建议或反馈\n',
        'other-suggestions-desc': '如果你有其他建议或反馈，也欢迎发送至 a_cabbage@qq.com!'
    },
    en: {
        'welcome-title': 'Welcome to Listening & Reading Station!',
        'welcome-desc': 'This is a curated resource platform to help high school students improve their English reading and listening skills. You can test your level and find suitable resources.',
        'vocab-test': 'Vocabulary Test',
        'vocab-test-desc': 'Test your English vocabulary level',
        'level-test': 'Reading/Listening Level Test',
        'level-test-desc': 'Understand your English reading and listening level',
        'browse-resources': 'Browse Resources',
        'browse-resources-desc': 'Skip the test and browse curated resources directly',
        'take-test': 'Take Test',
        'browse-now': 'Browse Now',
        'about-site': 'About',
        'back-home': 'Back to Home',
        'search-placeholder': 'Search resources...',
        'filter-type': 'By Type:',
        'filter-level': 'By Level:',
        'all': 'All',
        'reading': 'Reading',
        'listening': 'Listening',
        'no-results': 'No matching resources found',
        'back-to-resources': '← Back to Resources',
        'about-title': 'About',
        'about-intro-title': 'What is Listening & Reading Station?',
        'about-intro-desc-1': 'Listening & Reading Station is a website dedicated to sharing high-quality English listening and reading resources. Our goal is to help English learners quickly understand their current proficiency through simple assessments, and then match them with input materials that truly suit their level and interests—making learning more efficient and reducing unnecessary trial and error.\n\n',
        'about-intro-desc-2': 'In the process of learning English, many learners are not lacking motivation, but rather lack sufficient and appropriate input. According to the theory proposed by renowned linguist Dr. Stephen Krashen, abundant comprehensible input is the key to acquiring fluent and natural language ability. While there are countless recommendation lists and videos online, very few platforms systematically organize high-quality listening and reading materials by level and topic.\nListening & Reading Station was created to address this gap: to help learners overcome the most difficult early step—finding suitable resources. As for persistence and long-term progress, that part still depends on each learner’s own effort.\n\n',
        'about-intro-desc-3': 'Although the original idea came from supporting classmates preparing for TOEFL and IELTS, the resources collected here are suitable for nearly all English learners—from independent self-learners to those preparing for exams and anyone looking to improve their listening and reading skills.',
        'author-experience': 'The Author’s Learning Journey',
        'author-experience-desc': '“It is only books that provide an unlimited amount of repetition. It is only reading that can be returned to again and again without being an ordeal.” On an ordinary afternoon, when I was in Grade 9, I was scrolling through videos on Bilibili and happened to come across this sentence in a video. At that moment, I had no idea that it would completely change me.\n\nThe video was made by a Chinese English public speaking champion, who was explaining “How to truly learn a word forever.” The ideas he shared felt fresh and eye-opening. Drawing on research from many linguists, he explained that the most effective way to build vocabulary is through extensive reading – encountering words repeatedly in varied contexts, just as native speakers do. This concept deeply shocked and fascinated me.\nCurious, I kept digging. I watched more videos from him, which summarizes other findings from language acquisition research. He emphasized that it wasn’t just about memorizing words – whether it was listening, speaking, reading, or writing, large amounts of comprehensible input were the real key to efficient progress. That idea clicked with me.\n\nAt that time, I had just decided to switch to the international education track, and I urgently needed to improve my English. Although my English score on the high school entrance exam was decent, it was clearly far from sufficient for standardized tests and studying abroad.\n\nAt first, I had no idea how to improve. Like many students around me, I told my parents I wanted to enroll in test-prep classes. But it quickly became clear that I really, truly disliked that way of learning. I couldn’t bring myself to sit through two hours of grammar lectures. I couldn’t force myself to memorize the so-called “essential 4,000 TOEFL words.” And I certainly couldn’t endure the suffocating pressure of being constantly pushed by teaching assistants. So after just one class, I quit – and once again became completely lost. Luckily, I came across that video on that ordinary afternoon. More importantly, I didn’t just watch it – I was moved by it. I was willing to actually try the approach it described.\n\nThat’s when I began to catch up, to chase after the stars I had once believed were far beyond my reach. I created a daily routine: at least one episode of English podcasts (usually while exercising or commuting), and five minutes of reading. I started with EnglishPod and Magic Tree House, then gradually moved on to more difficult books, English documentaries, films, and eventually the entire English world. Beyond structured listening and reading, I switched the language of all my devices and apps to English, downloaded games on Steam in English, read game instructions in English, and listened to English commentary for League of Legends matches.\n\nI haven’t “arrived” yet – I’m still on the journey. English learning has never been just about standardized tests; it’s a lifelong process. But I do believe I’m walking on the right path.\n\n……\n\nThe words above were written two years ago (around April 2024). At the time, I had only just begun this journey. Although I felt I was on the right track, I honestly had no idea what the future would hold. Looking back now, I’m deeply moved by how I kept going despite the uncertainty - and by how far I’ve come since then.\n\nOn March 2, 2024 – eight months after I began my comprehensive input journey – I took my first TOEFL exam and scored 69. Exactly 365 days later, on March 1, 2025, I took it again and scored 99, without taking a single TOEFL preparation course in between. Then, on October 21, 2025 – two years and three months after I began my input-based learning – I nervously opened my score report and saw 109, with full marks in both Reading and Listening.\n\nMy teachers described my experience as a legend, because throughout the entire process, I only took two speaking classes and two writing classes at the very end. The results may seem extraordinary, but what I hope even more is that this story can become many more people’s story. My own progress made me happy – but being able to help others, especially classmates who are still struggling with English, would be something I’m even more proud of.\n\nThank you for reading this far. If you’re feeling lost, confused, or doubting whether you can ever learn English well, I want you to know this: I once stood exactly where you are now. I’m not a naturally gifted learner. I simply found a method that worked for me – and stuck with it long enough. If this approach resonates with you, why not start today? Even if it’s just one page of reading, or one minute of listening. Perhaps it will become your way of learning; perhaps it will simply be a starting point on your journey. Either way, that’s okay. What matters is taking the first step. I hope that through rounds of experiment, you’ll find your own rhythm – and one day, when you look back on your journey, you’ll be filled with the same surprise and pride.',
        'references': 'References',
        'references-desc': 'All resources on this site are from public channels, including well-known platforms such as YouTube, TED, and BBC. All resource links point to original sources, and this site serves only as a navigation and recommendation platform.',
        'acknowledgements-title': 'Acknowledgements',
        'acknowledgements-desc': 'The author would like to express sincere gratitude to Teacher Nick Chen for the guidance and support provided throughout this project; to Teacher Xingkong, Mujiang, Benny and my friend Tyler for assistance with website building and technical support; and to Cursor for offering website development tools. The author also extends heartfelt thanks to all the teachers and students who contributed suggestions and feedback during the project. Your support has been essential to the continuous improvement of Listening & Reading Station.',
        'visit-link': 'Visit Resource',
        'description': 'Description:',
        'assessment-intro': 'To help you choose the most suitable materials, we provide two simple and practical assessment tools.',
        'assessment-vocab-title': '1. Vocabulary Test: Understand Your English Vocabulary Level',
        'assessment-vocab-desc': 'The vocabulary test gives you a quick estimate of your current vocabulary size. You can use the following score ranges as a reference when selecting resources:',
        'assessment-vocab-range-1': '0–2000: Recommended to start with Elementary resources',
        'assessment-vocab-range-2': '2000–5500: Suitable for Lower-Intermediate resources',
        'assessment-vocab-range-3': '5500–6500: Suitable for Intermediate resources',
        'assessment-vocab-range-4': '6500–8000: Suitable for Upper-Intermediate resources',
        'assessment-vocab-range-5': '8000+: You can challenge Advanced resources',
        'assessment-efset-title': '2. Reading & Listening Test (EF SET): Assess Your Overall English Ability',
        'assessment-efset-desc-1': 'The EF Standard English Test helps you measure your overall English proficiency.',
        'assessment-efset-desc-2': 'If you’re short on time, choose the 50-minute version, which evaluates listening and reading skills.',
        'assessment-efset-desc-3': 'If you have more time, try the 90-minute full test, which covers listening, speaking, reading, and writing for a more comprehensive evaluation.',
        'assessment-efset-desc-4': 'Based on your reading and listening results, you may refer to the following levels when selecting materials (individual situations may vary, so feel free to adjust as needed):',
        'assessment-efset-level-a1a2': 'A1–A2: Elementary',
        'assessment-efset-level-b1': 'B1: Lower-Intermediate',
        'assessment-efset-level-b2': 'B2: Intermediate',
        'assessment-efset-level-c1': 'C1: Upper-Intermediate',
        'assessment-efset-level-c2': 'C2: Advanced',
        'no-resource-title': 'If You Can’t Find a Resource That Suits You',
        'no-resource-item-1': 'Ask an AI for recommendations: You can use this template as a reference:“I’m interested in … My current English level is … Could you recommend some related listening and reading resources?”\n',
        'no-resource-item-2': 'Search on your own: Look for materials on different platforms using keywords related to your interests or proficiency level.\n',
        'no-resource-item-3': 'Explore recommendations from quality content creators: The site also features suggestions from content creators who have strong English learning experience and consistently high-quality sharing. Their content can be a great source of inspiration.\n',
        'no-resource-item-4': 'Use your personal network: Asking teachers, classmates, or friends with strong English skills can often lead to excellent resource recommendations.\n',
        'recommend-resource-title': 'Recommend a Resource\n',
        'recommend-resource-desc-1': 'If you come across a high-quality resource that you’d like to share with others, you’re very welcome to recommend it!\nPlease send the following information to a_cabbage@qq.com:\n',
        'recommend-resource-item-1': 'Your estimated difficulty level of the resource (based on the level categories on the homepage)\n',
        'recommend-resource-item-2': 'Resource title\n',
        'recommend-resource-item-3': 'A publicly accessible link to the resource\n',
        'recommend-resource-desc-2': 'We will review your submission as soon as possible and decide whether to add it to the website.\n',
        'other-suggestions-title': 'Other Suggestions or Feedback\n',
        'other-suggestions-desc': 'If you have other suggestions or feedback, please feel free to send them to a_cabbage@qq.com!'
    }
};

(function() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    // 从localStorage读取语言设置，默认为中文
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 更新语言
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // 更新所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // 更新语言切换按钮文本
        if (langText) {
            langText.textContent = lang === 'zh' ? 'EN' : '中文';
        }
        
        // 更新HTML lang属性
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
    
    // 初始化语言
    updateLanguage(currentLang);
    
    // 切换语言
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            updateLanguage(newLang);
            
            // 如果在资源页面，重新渲染资源卡片
            if (typeof renderResources === 'function') {
                renderResources();
            }
            
            // 如果在详情页，重新渲染详情
            if (typeof renderDetail === 'function') {
                renderDetail();
            }
        });
    }
    
    // 导出当前语言和翻译函数供其他脚本使用
    window.getCurrentLanguage = function() {
        return currentLang;
    };
    
    window.getTranslation = function(key) {
        return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
    };
})();

