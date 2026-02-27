// ==================== 数据状态 ====================
let resumeData = {
    name: '张三',
    title: '高级前端工程师',
    phone: '138-0000-0000',
    email: 'zhangsan@email.com',
    city: '北京市',
    summary: '5年前端开发经验，精通React、Vue等主流框架，具备大型项目架构能力。追求代码质量和用户体验，有良好的团队协作和技术分享精神。',
    work: [
        {
            id: 1,
            company: '阿里巴巴集团',
            role: '前端开发工程师',
            time: '2021.03 - 至今',
            desc: '• 负责淘宝主站核心模块开发，日均PV千万级\n• 主导前端工程化改造，构建时间缩短40%\n• 设计并实现组件库，覆盖20+业务线'
        },
        {
            id: 2,
            company: '字节跳动',
            role: '前端工程师',
            time: '2019.06 - 2021.02',
            desc: '• 参与抖音电商后台系统开发\n• 优化首屏加载速度，LCP提升30%\n• 参与内部工具链建设，提升团队效率'
        }
    ],
    project: {
        name: '企业级低代码平台',
        time: '2022.01 - 2022.12',
        role: '核心开发者',
        desc: '设计并开发可视化页面搭建平台，支持拖拽配置、实时预览、一键发布。目前已有100+业务方使用，累计搭建页面5000+。'
    },
    skills: ['JavaScript/TypeScript', 'React/Vue', 'Node.js', 'Webpack/Vite', 'Git'],
    education: {
        school: '清华大学',
        major: '计算机科学与技术 | 本科',
        time: '2015.09 - 2019.06'
    }
};

let currentTemplate = 1;

// ==================== 模板定义 ====================
const templates = {
    1: {
        name: '简约黑白',
        render: renderTemplate1
    },
    2: {
        name: '商务蓝调',
        render: renderTemplate2
    },
    3: {
        name: '暖调创意',
        render: renderTemplate3
    },
    4: {
        name: '表格经典',
        render: renderTemplate4
    },
    5: {
        name: '极简聚焦',
        render: renderTemplate5
    },
    6: {
        name: '时间轴',
        render: renderTemplate6
    },
    7: {
        name: '左右分栏',
        render: renderTemplate7
    },
    8: {
        name: '卡片设计',
        render: renderTemplate8
    },
    9: {
        name: '深色系',
        render: renderTemplate9
    },
    10: {
        name: '单页聚焦',
        render: renderTemplate10
    }
};

// ==================== 模板渲染函数 ====================
function renderTemplate1() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; padding: 40px; }
.header { text-align: center; padding-bottom: 30px; border-bottom: 2px solid #333; }
.name { font-size: 36px; font-weight: bold; color: #333; }
.title { font-size: 18px; color: #666; margin-top: 10px; }
.contact { font-size: 14px; color: #999; margin-top: 15px; }
.section { margin-top: 30px; }
.section-title { font-size: 18px; font-weight: bold; color: #333; border-left: 4px solid #333; padding-left: 10px; margin-bottom: 15px; }
.item { margin-bottom: 20px; }
.item-title { font-size: 16px; font-weight: bold; color: #333; }
.item-subtitle { font-size: 14px; color: #666; margin-top: 5px; }
.item-content { font-size: 14px; color: #666; line-height: 1.8; margin-top: 8px; }
.skills { display: flex; flex-wrap: wrap; gap: 10px; }
.skill-tag { background: #f5f5f5; padding: 5px 12px; font-size: 14px; color: #666; }
</style>
<div class="header">
    <div class="name">${resumeData.name}</div>
    <div class="title">${resumeData.title}</div>
    <div class="contact">电话：${resumeData.phone} | 邮箱：${resumeData.email} | 地址：${resumeData.city}</div>
</div>
<div class="section">
    <div class="section-title">个人简介</div>
    <div class="item-content">${resumeData.summary}</div>
</div>
<div class="section">
    <div class="section-title">工作经历</div>
    ${resumeData.work.map(w => `
    <div class="item">
        <div class="item-title">${w.company} | ${w.role}</div>
        <div class="item-subtitle">${w.time}</div>
        <div class="item-content">${w.desc.replace(/\n/g, '<br>')}</div>
    </div>`).join('')}
</div>
<div class="section">
    <div class="section-title">项目经验</div>
    <div class="item">
        <div class="item-title">${resumeData.project.name}</div>
        <div class="item-subtitle">${resumeData.project.time} | ${resumeData.project.role}</div>
        <div class="item-content">${resumeData.project.desc}</div>
    </div>
</div>
<div class="section">
    <div class="section-title">教育背景</div>
    <div class="item">
        <div class="item-title">${resumeData.education.school} | ${resumeData.education.major}</div>
        <div class="item-subtitle">${resumeData.education.time}</div>
    </div>
</div>
<div class="section">
    <div class="section-title">专业技能</div>
    <div class="skills">
        ${resumeData.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
    </div>
</div>`;
}

function renderTemplate2() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "Microsoft YaHei", sans-serif; }
.container { background: #fff; }
.header { background: linear-gradient(135deg, #0056b3 0%, #007bff 100%); padding: 40px; color: #fff; }
.name { font-size: 32px; font-weight: bold; }
.title { font-size: 18px; opacity: 0.9; margin-top: 8px; }
.contact { font-size: 14px; opacity: 0.8; margin-top: 15px; }
.content { padding: 30px 40px; }
.section { margin-bottom: 25px; }
.section-title { font-size: 18px; font-weight: bold; color: #0056b3; border-bottom: 2px solid #e1e8ed; padding-bottom: 8px; margin-bottom: 15px; }
.item { margin-bottom: 18px; padding-left: 14px; border-left: 1px solid #e1e8ed; }
.item-title { font-size: 16px; font-weight: bold; color: #333; }
.item-subtitle { font-size: 14px; color: #007bff; margin-top: 4px; }
.item-content { font-size: 14px; color: #666; line-height: 1.7; margin-top: 8px; }
.skills { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 5px 14px; font-size: 14px; color: #0056b3; border-radius: 15px; }
</style>
<div class="container">
    <div class="header">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
        <div class="contact">手机：${resumeData.phone} | 邮箱：${resumeData.email} | 城市：${resumeData.city}</div>
    </div>
    <div class="content">
        <div class="section">
            <div class="section-title">个人简介</div>
            <div class="item" style="border-left: none; padding-left: 0;">${resumeData.summary}</div>
        </div>
        <div class="section">
            <div class="section-title">工作经历</div>
            ${resumeData.work.map(w => `
            <div class="item">
                <div class="item-title">${w.company} | ${w.role}</div>
                <div class="item-subtitle">${w.time}</div>
                <div class="item-content">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
        <div class="section">
            <div class="section-title">项目经验</div>
            <div class="item">
                <div class="item-title">${resumeData.project.name}</div>
                <div class="item-subtitle">${resumeData.project.time} | ${resumeData.project.role}</div>
                <div class="item-content">${resumeData.project.desc}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">教育背景</div>
            <div class="item">
                <div class="item-title">${resumeData.education.school} | ${resumeData.education.major}</div>
                <div class="item-subtitle">${resumeData.education.time}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">专业技能</div>
            <div class="skills">
                ${resumeData.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    </div>
</div>`;
}

function renderTemplate3() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "PingFang SC", sans-serif; background: #fff9f0; padding: 35px; }
.container { background: #fff; border-radius: 12px; overflow: hidden; }
.header { background: linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%); padding: 45px 40px; color: #fff; }
.name { font-size: 38px; font-weight: bold; }
.title { font-size: 20px; opacity: 0.95; margin-top: 10px; }
.contact { font-size: 14px; opacity: 0.85; margin-top: 18px; }
.content { padding: 35px 40px; }
.section { margin-bottom: 30px; }
.section-title { font-size: 22px; font-weight: bold; color: #ff6b6b; margin-bottom: 18px; }
.section-title span { width: 35px; height: 3px; background: #ffa502; display: inline-block; margin-left: 12px; }
.item { margin-bottom: 22px; }
.item-title { font-size: 17px; font-weight: bold; color: #333; }
.item-date { font-size: 14px; color: #ff6b6b; margin-top: 4px; }
.item-content { font-size: 14px; color: #777; line-height: 1.9; margin-top: 10px; }
.tag-group { display: flex; flex-wrap: wrap; gap: 10px; }
.tag { background: linear-gradient(135deg, #fff4e6 0%, #ffe8d1 100%); padding: 6px 16px; font-size: 14px; color: #e67e22; border-radius: 20px; border: 1px solid #ffe0b2; }
</style>
<div class="container">
    <div class="header">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
        <div class="contact">📱 ${resumeData.phone} | ✉️ ${resumeData.email} | 📍 ${resumeData.city}</div>
    </div>
    <div class="content">
        <div class="section">
            <div class="section-title">关于我<span></span></div>
            <div class="item-content" style="margin-top: 0;">${resumeData.summary}</div>
        </div>
        <div class="section">
            <div class="section-title">工作经历<span></span></div>
            ${resumeData.work.map(w => `
            <div class="item">
                <div class="item-title">${w.company} | ${w.role}</div>
                <div class="item-date">${w.time}</div>
                <div class="item-content">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
        <div class="section">
            <div class="section-title">精选项目<span></span></div>
            <div class="item">
                <div class="item-title">${resumeData.project.name}</div>
                <div class="item-date">${resumeData.project.time} | ${resumeData.project.role}</div>
                <div class="item-content">${resumeData.project.desc}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">教育背景<span></span></div>
            <div class="item">
                <div class="item-title">${resumeData.education.school}</div>
                <div class="item-date">${resumeData.education.major} | ${resumeData.education.time}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">专业技能<span></span></div>
            <div class="tag-group">
                ${resumeData.skills.map(s => `<span class="tag">${s}</span>`).join('')}
            </div>
        </div>
    </div>
</div>`;
}

function renderTemplate4() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "SimSun", "宋体", serif; background: #fff; padding: 20px; }
.container { border: 1px solid #000; }
.header { background: #1a1a1a; padding: 20px; text-align: center; }
.name { font-size: 28px; font-weight: bold; color: #fff; letter-spacing: 3px; }
.content { padding: 20px 30px; }
.section { margin-bottom: 20px; }
.section-title { font-size: 16px; font-weight: bold; color: #000; background: #e8e8e8; padding: 8px 15px; margin-bottom: 12px; letter-spacing: 2px; }
table { width: 100%; border-collapse: collapse; }
td { padding: 8px 0; vertical-align: top; font-size: 14px; line-height: 1.8; }
.label { color: #333; font-weight: bold; width: 100px; }
.value { color: #555; }
.item-row { border-bottom: 1px solid #ddd; }
.skills { display: inline-block; background: #f0f0f0; padding: 3px 10px; margin: 2px 5px 2px 0; }
</style>
<div class="container">
    <div class="header"><div class="name">个 人 简 历</div></div>
    <div class="content">
        <div class="section">
            <div class="section-title">基 本 信 息</div>
            <table>
                <tr><td class="label">姓　　名：</td><td class="value">${resumeData.name}</td><td class="label">联系电话：</td><td class="value">${resumeData.phone}</td></tr>
                <tr><td class="label">职　　位：</td><td class="value">${resumeData.title}</td><td class="label">电子邮箱：</td><td class="value">${resumeData.email}</td></tr>
                <tr><td class="label">所在城市：</td><td class="value">${resumeData.city}</td></tr>
            </table>
        </div>
        <div class="section">
            <div class="section-title">个 人 简 介</div>
            <table><tr><td class="value">${resumeData.summary}</td></tr></table>
        </div>
        <div class="section">
            <div class="section-title">工 作 经 历</div>
            <table>
                ${resumeData.work.map(w => `<tr class="item-row"><td class="label">${w.time}</td><td class="value"><strong>${w.company} | ${w.role}</strong><br>${w.desc.replace(/\n/g, '<br>')}</td></tr>`).join('')}
            </table>
        </div>
        <div class="section">
            <div class="section-title">教 育 背 景</div>
            <table><tr><td class="label">${resumeData.education.time}</td><td class="value">${resumeData.education.school} | ${resumeData.education.major}</td></tr></table>
        </div>
        <div class="section">
            <div class="section-title">专 业 技 能</div>
            <div style="padding: 5px 0;">${resumeData.skills.map(s => `<span class="skills">${s}</span>`).join('')}</div>
        </div>
    </div>
</div>`;
}

function renderTemplate5() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #fff; padding: 50px; }
.header { text-align: left; padding-bottom: 40px; }
.name { font-size: 42px; font-weight: 300; letter-spacing: 3px; color: #1a1a1a; }
.role { font-size: 16px; color: #888; margin-top: 10px; letter-spacing: 4px; }
.divider { width: 40px; height: 1px; background: #ddd; margin: 25px 0 20px; }
.section { margin-bottom: 35px; }
.section-label { font-size: 11px; color: #aaa; letter-spacing: 2px; margin-bottom: 15px; text-transform: uppercase; }
.work-item { margin-bottom: 30px; }
.work-title { font-size: 18px; font-weight: 500; color: #1a1a1a; }
.work-period { font-size: 12px; color: #999; margin-top: 4px; }
.work-desc { font-size: 14px; color: #555; line-height: 2; margin-top: 12px; }
.contact-item { font-size: 12px; color: #999; margin-top: 6px; letter-spacing: 1px; }
</style>
<div class="header">
    <div class="name">${resumeData.name}</div>
    <div class="role">${resumeData.title.toUpperCase()}</div>
    <div class="divider"></div>
    <div class="contact-item">${resumeData.email}</div>
    <div class="contact-item">+86 ${resumeData.phone.replace(/-/g, ' ')}</div>
    <div class="contact-item">${resumeData.city}</div>
</div>
<div class="section">
    <div class="section-label">About</div>
    <div class="work-desc">${resumeData.summary}</div>
</div>
<div class="section">
    <div class="section-label">Experience</div>
    ${resumeData.work.map(w => `
    <div class="work-item">
        <div class="work-title">${w.role}</div>
        <div class="work-desc">${w.company} | ${w.time}</div>
        <div class="work-desc">${w.desc.replace(/\n/g, '<br>')}</div>
    </div>`).join('')}
</div>
<div class="section">
    <div class="section-label">Skills</div>
    <div class="work-desc">${resumeData.skills.join(' · ')}</div>
</div>`;
}

function renderTemplate6() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "PingFang SC", sans-serif; background: #fafafa; padding: 30px; }
.container { background: #fff; padding: 40px; border-radius: 8px; }
.header { text-align: center; padding-bottom: 30px; border-bottom: 1px solid #eee; }
.name { font-size: 32px; font-weight: bold; color: #2c3e50; }
.title { font-size: 18px; color: #7f8c8d; margin-top: 8px; }
.contact { font-size: 14px; color: #95a5a6; margin-top: 15px; }
.section { margin-top: 35px; }
.section-title { font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 20px; border-left: 4px solid #3498db; padding-left: 10px; }
.timeline { position: relative; padding-left: 30px; }
.timeline::before { content: ""; position: absolute; left: 6px; top: 8px; bottom: 0; width: 2px; background: #e0e0e0; }
.timeline-item { position: relative; margin-bottom: 30px; }
.timeline-item::before { content: ""; position: absolute; left: -30px; top: 5px; width: 14px; height: 14px; background: #3498db; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 0 0 2px #3498db; }
.timeline-date { font-size: 14px; color: #3498db; font-weight: 500; }
.timeline-title { font-size: 16px; font-weight: bold; color: #2c3e50; margin-top: 4px; }
.timeline-content { font-size: 14px; color: #555; line-height: 1.8; margin-top: 10px; }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
.skill-item { background: #f8f9fa; padding: 12px; border-radius: 6px; text-align: center; }
.skill-name { font-size: 14px; color: #2c3e50; }
</style>
<div class="container">
    <div class="header">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
        <div class="contact">📧 ${resumeData.email} | 📱 ${resumeData.phone} | 📍 ${resumeData.city}</div>
    </div>
    <div class="section">
        <div class="section-title">个人简介</div>
        <div class="timeline-content" style="margin-top: 0;">${resumeData.summary}</div>
    </div>
    <div class="section">
        <div class="section-title">工作经历</div>
        <div class="timeline">
            ${resumeData.work.map(w => `
            <div class="timeline-item">
                <div class="timeline-date">${w.time}</div>
                <div class="timeline-title">${w.company} | ${w.role}</div>
                <div class="timeline-content">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
    </div>
    <div class="section">
        <div class="section-title">教育背景</div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">${resumeData.education.time}</div>
                <div class="timeline-title">${resumeData.education.school}</div>
                <div class="timeline-title" style="font-weight: normal;">${resumeData.education.major}</div>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="section-title">专业技能</div>
        <div class="skills-grid">
            ${resumeData.skills.map(s => `<div class="skill-item"><div class="skill-name">${s}</div></div>`).join('')}
        </div>
    </div>
</div>`;
}

function renderTemplate7() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #f5f5f5; padding: 30px; }
.container { background: #fff; display: flex; min-height: 1000px; }
.sidebar { width: 280px; background: #2c3e50; color: #fff; padding: 40px 20px; }
.main { flex: 1; padding: 40px 35px; }
.name { font-size: 24px; font-weight: bold; text-align: center; }
.title { font-size: 16px; text-align: center; opacity: 0.8; margin-top: 8px; }
.divider { width: 50px; height: 2px; background: rgba(255,255,255,0.3); margin: 20px auto; }
.sidebar-section { margin-bottom: 30px; }
.sidebar-title { font-size: 14px; font-weight: bold; letter-spacing: 1px; margin-bottom: 15px; opacity: 0.9; }
.contact-item { font-size: 13px; margin-bottom: 10px; }
.skill-item { background: rgba(255,255,255,0.1); padding: 8px 12px; font-size: 13px; margin-bottom: 8px; border-radius: 4px; }
.section { margin-bottom: 30px; }
.section-title { font-size: 18px; font-weight: bold; color: #2c3e50; margin-bottom: 20px; border-bottom: 2px solid #2c3e50; padding-bottom: 8px; }
.item { margin-bottom: 25px; }
.item-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
.item-title { font-size: 16px; font-weight: bold; color: #2c3e50; }
.item-date { font-size: 14px; color: #7f8c8d; }
.item-content { font-size: 14px; color: #555; line-height: 1.7; margin-top: 10px; }
</style>
<div class="container">
    <div class="sidebar">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
        <div class="divider"></div>
        <div class="sidebar-section">
            <div class="sidebar-title">联系方式</div>
            <div class="contact-item">📧 ${resumeData.email}</div>
            <div class="contact-item">📱 ${resumeData.phone}</div>
            <div class="contact-item">📍 ${resumeData.city}</div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-title">专业技能</div>
            ${resumeData.skills.map(s => `<div class="skill-item">${s}</div>`).join('')}
        </div>
    </div>
    <div class="main">
        <div class="section">
            <div class="section-title">个人简介</div>
            <div class="item-content">${resumeData.summary}</div>
        </div>
        <div class="section">
            <div class="section-title">工作经历</div>
            ${resumeData.work.map(w => `
            <div class="item">
                <div class="item-header">
                    <div class="item-title">${w.company} | ${w.role}</div>
                    <div class="item-date">${w.time}</div>
                </div>
                <div class="item-content">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
        <div class="section">
            <div class="section-title">项目经验</div>
            <div class="item">
                <div class="item-title">${resumeData.project.name}</div>
                <div class="item-header"><div class="item-date">${resumeData.project.time} | ${resumeData.project.role}</div></div>
                <div class="item-content">${resumeData.project.desc}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">教育背景</div>
            <div class="item">
                <div class="item-header">
                    <div class="item-title">${resumeData.education.school}</div>
                    <div class="item-date">${resumeData.education.time}</div>
                </div>
                <div class="item-content">${resumeData.education.major}</div>
            </div>
        </div>
    </div>
</div>`;
}

function renderTemplate8() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #e8ecf1; padding: 25px; }
.container { max-width: 850px; margin: 0 auto; }
.header { text-align: center; padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; margin-bottom: 25px; color: #fff; }
.name { font-size: 36px; font-weight: bold; }
.title { font-size: 18px; margin-top: 10px; opacity: 0.95; }
.contact { font-size: 14px; margin-top: 15px; opacity: 0.85; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.card { background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.card-full { grid-column: span 2; }
.card-title { font-size: 16px; font-weight: bold; color: #667eea; margin-bottom: 15px; border-left: 4px solid #667eea; padding-left: 10px; }
.exp-item { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
.exp-item:last-child { border-bottom: none; }
.exp-role { font-size: 15px; font-weight: bold; color: #333; }
.exp-company { font-size: 14px; color: #667eea; margin-top: 3px; }
.exp-date { font-size: 12px; color: #999; margin-top: 4px; }
.exp-desc { font-size: 13px; color: #666; line-height: 1.7; margin-top: 8px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { background: linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%); color: #667eea; padding: 6px 14px; font-size: 13px; border-radius: 20px; }
.intro-text { font-size: 14px; color: #666; line-height: 1.8; }
</style>
<div class="container">
    <div class="header">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title}</div>
        <div class="contact">📧 ${resumeData.email} | 📱 ${resumeData.phone} | 📍 ${resumeData.city}</div>
    </div>
    <div class="grid">
        <div class="card card-full">
            <div class="card-title">个人简介</div>
            <div class="intro-text">${resumeData.summary}</div>
        </div>
        <div class="card card-full">
            <div class="card-title">工作经历</div>
            ${resumeData.work.map(w => `
            <div class="exp-item">
                <div class="exp-role">${w.company} | ${w.role}</div>
                <div class="exp-company">${w.time}</div>
                <div class="exp-desc">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
        <div class="card">
            <div class="card-title">教育背景</div>
            <div class="exp-item" style="border-bottom: none;">
                <div class="exp-role">${resumeData.education.school}</div>
                <div class="exp-company">${resumeData.education.major}</div>
                <div class="exp-date">${resumeData.education.time}</div>
            </div>
        </div>
        <div class="card">
            <div class="card-title">项目经验</div>
            <div class="exp-item" style="border-bottom: none;">
                <div class="exp-role">${resumeData.project.name}</div>
                <div class="exp-company">${resumeData.project.time} | ${resumeData.project.role}</div>
                <div class="exp-desc">${resumeData.project.desc}</div>
            </div>
        </div>
        <div class="card card-full">
            <div class="card-title">专业技能</div>
            <div class="skill-tags">
                ${resumeData.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    </div>
</div>`;
}

function renderTemplate9() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "Segoe UI", "Roboto", sans-serif; background: #0d1117; padding: 35px; }
.container { background: #161b22; border-radius: 12px; overflow: hidden; border: 1px solid #30363d; }
.header { background: linear-gradient(135deg, #238636 0%, #2ea043 100%); padding: 40px; color: #fff; }
.name { font-size: 34px; font-weight: bold; }
.title { font-size: 18px; opacity: 0.9; margin-top: 10px; }
.contact { font-size: 14px; opacity: 0.8; margin-top: 15px; }
.content { padding: 35px 40px; }
.section { margin-bottom: 30px; }
.section-title { font-size: 18px; font-weight: bold; color: #c9d1d9; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
.section-title::before { content: "▶"; color: #238636; font-size: 10px; }
.item { margin-bottom: 20px; }
.item-title { font-size: 16px; font-weight: bold; color: #e6edf3; }
.item-date { font-size: 13px; color: #238636; margin-top: 4px; }
.item-content { font-size: 14px; color: #8b949e; line-height: 1.8; margin-top: 10px; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; }
.tech-item { background: #21262d; padding: 6px 14px; font-size: 13px; color: #58a6ff; border-radius: 4px; border: 1px solid #30363d; }
</style>
<div class="container">
    <div class="header">
        <div class="name">${resumeData.name}</div>
        <div class="title">${resumeData.title.toUpperCase()}</div>
        <div class="contact">📧 ${resumeData.email} | 📍 ${resumeData.city}</div>
    </div>
    <div class="content">
        <div class="section">
            <div class="section-title">About</div>
            <div class="item-content" style="margin-top: 0;">${resumeData.summary}</div>
        </div>
        <div class="section">
            <div class="section-title">Work Experience</div>
            ${resumeData.work.map(w => `
            <div class="item">
                <div class="item-title">${w.company} | ${w.role}</div>
                <div class="item-date">${w.time}</div>
                <div class="item-content">${w.desc.replace(/\n/g, '<br>')}</div>
            </div>`).join('')}
        </div>
        <div class="section">
            <div class="section-title">Projects</div>
            <div class="item">
                <div class="item-title">${resumeData.project.name}</div>
                <div class="item-date">${resumeData.project.time} | ${resumeData.project.role}</div>
                <div class="item-content">${resumeData.project.desc}</div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">Tech Stack</div>
            <div class="tech-stack">
                ${resumeData.skills.map(s => `<span class="tech-item">${s}</span>`).join('')}
            </div>
        </div>
        <div class="section">
            <div class="section-title">Education</div>
            <div class="item">
                <div class="item-title">${resumeData.education.school}</div>
                <div class="item-date">${resumeData.education.time}</div>
                <div class="item-content">${resumeData.education.major}</div>
            </div>
        </div>
    </div>
</div>`;
}

function renderTemplate10() {
    return `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #fff; color: #1a1a1a; }
.page { width: 210mm; min-height: 297mm; padding: 40px 50px; }
.header { border-bottom: 3px solid #000; padding-bottom: 25px; margin-bottom: 30px; }
.top-row { display: flex; justify-content: space-between; align-items: flex-start; }
.name { font-size: 40px; font-weight: bold; letter-spacing: 2px; }
.title { font-size: 16px; color: #666; margin-top: 8px; letter-spacing: 1px; }
.contact-block { text-align: right; font-size: 12px; color: #666; }
.contact-item { margin-bottom: 5px; }
.summary { font-size: 13px; line-height: 1.8; color: #333; margin-top: 20px; }
.section { margin-bottom: 22px; }
.section-title { font-size: 13px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; color: #000; }
.section-title::after { content: ""; display: block; width: 30px; height: 2px; background: #000; margin-top: 6px; }
.work-grid { display: grid; grid-template-columns: 130px 1fr; gap: 20px; }
.work-date { font-size: 12px; color: #666; font-weight: 500; }
.work-block { margin-bottom: 15px; }
.work-role { font-size: 14px; font-weight: bold; }
.work-company { font-size: 12px; color: #666; }
.work-achievements { font-size: 11px; line-height: 1.7; color: #444; margin-top: 6px; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.edu-row { display: flex; justify-content: space-between; font-size: 13px; }
.edu-school { font-weight: bold; }
.edu-date { color: #666; font-size: 12px; }
.skills-container { display: flex; flex-wrap: wrap; gap: 6px; }
.skill { font-size: 10px; padding: 3px 8px; background: #f5f5f5; color: #333; }
</style>
<div class="page">
    <div class="header">
        <div class="top-row">
            <div>
                <div class="name">${resumeData.name}</div>
                <div class="title">${resumeData.title.toUpperCase()}</div>
            </div>
            <div class="contact-block">
                <div class="contact-item">${resumeData.email}</div>
                <div class="contact-item">${resumeData.phone}</div>
                <div class="contact-item">${resumeData.city}</div>
            </div>
        </div>
        <div class="summary">${resumeData.summary}</div>
    </div>
    <div class="two-col">
        <div>
            <div class="section">
                <div class="section-title">Experience</div>
                ${resumeData.work.map(w => `
                <div class="work-grid">
                    <div class="work-date">${w.time}</div>
                    <div class="work-block">
                        <div class="work-role">${w.company} | ${w.role}</div>
                        <div class="work-achievements">${w.desc.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>`).join('')}
            </div>
            <div class="section">
                <div class="section-title">Projects</div>
                <div class="work-role">${resumeData.project.name}</div>
                <div class="work-achievements">${resumeData.project.desc}</div>
            </div>
        </div>
        <div>
            <div class="section">
                <div class="section-title">Education</div>
                <div class="edu-row">
                    <span class="edu-school">${resumeData.education.school}</span>
                    <span class="edu-date">${resumeData.education.time}</span>
                </div>
                <div class="work-achievements">${resumeData.education.major}</div>
            </div>
            <div class="section">
                <div class="section-title">Skills</div>
                <div class="skills-container">
                    ${resumeData.skills.map(s => `<span class="skill">${s}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>
</div>`;
}

// ==================== 初始化 ====================
function init() {
    renderTemplateSelector();
    renderWorkItems();
    renderSkills();
    updatePreview();
    setupSkillInput();
}

function renderTemplateSelector() {
    const container = document.getElementById('templateSelector');
    container.innerHTML = Object.entries(templates).map(([id, tmpl]) => `
        <div class="template-option ${id == currentTemplate ? 'active' : ''}"
             onclick="selectTemplate(${id})">
            ${tmpl.name}
        </div>
    `).join('');
}

function selectTemplate(id) {
    currentTemplate = id;
    renderTemplateSelector();
    updatePreview();
}

function updatePreview() {
    // 从表单获取最新数据
    resumeData.name = document.getElementById('name').value;
    resumeData.title = document.getElementById('title').value;
    resumeData.phone = document.getElementById('phone').value;
    resumeData.email = document.getElementById('email').value;
    resumeData.city = document.getElementById('city').value;
    resumeData.summary = document.getElementById('summary').value;

    resumeData.project.name = document.getElementById('projectName').value;
    resumeData.project.time = document.getElementById('projectTime').value;
    resumeData.project.role = document.getElementById('projectRole').value;
    resumeData.project.desc = document.getElementById('projectDesc').value;

    resumeData.education.school = document.getElementById('school').value;
    resumeData.education.major = document.getElementById('major').value;
    resumeData.education.time = document.getElementById('gradTime').value;

    const previewFrame = document.getElementById('previewFrame');
    const template = templates[currentTemplate];
    previewFrame.innerHTML = template.render();
}

// ==================== Tab 切换 ====================
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).style.display = 'block';
}

// ==================== 工作经历管理 ====================
function renderWorkItems() {
    const container = document.getElementById('workItems');
    container.innerHTML = resumeData.work.map((w, index) => `
        <div class="work-item">
            <div class="work-header">
                <input type="text" class="work-title-input" value="${w.company}"
                       oninput="updateWork(${index}, 'company', this.value)">
                <button class="btn-remove" onclick="removeWork(${index})">删除</button>
            </div>
            <div class="form-group">
                <input type="text" class="form-input" value="${w.role}" placeholder="职位"
                       oninput="updateWork(${index}, 'role', this.value)">
            </div>
            <div class="form-group">
                <input type="text" class="form-input" value="${w.time}" placeholder="时间段"
                       oninput="updateWork(${index}, 'time', this.value)">
            </div>
            <div class="form-group">
                <textarea class="form-textarea" placeholder="工作描述（每行一条）"
                          oninput="updateWork(${index}, 'desc', this.value)">${w.desc}</textarea>
            </div>
        </div>
    `).join('');
}

function addWorkItem() {
    resumeData.work.push({
        id: Date.now(),
        company: '新公司名称',
        role: '职位名称',
        time: '时间段',
        desc: '• 主要职责\n• 主要成果'
    });
    renderWorkItems();
    updatePreview();
}

function removeWork(index) {
    resumeData.work.splice(index, 1);
    renderWorkItems();
    updatePreview();
}

function updateWork(index, field, value) {
    resumeData.work[index][field] = value;
    updatePreview();
}

// ==================== 技能管理 ====================
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    const tags = resumeData.skills.map((s, i) => `
        <span class="skill-tag">
            ${s}
            <span onclick="removeSkill(${i})">×</span>
        </span>
    `).join('');
    const input = document.getElementById('skillInput');
    container.innerHTML = tags + '<input type="text" class="skills-input" id="skillInput" placeholder="输入技能后回车...">';
    setupSkillInput();
}

function setupSkillInput() {
    const input = document.getElementById('skillInput');
    if (!input) return;
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = input.value.trim();
            if (value && !resumeData.skills.includes(value)) {
                resumeData.skills.push(value);
                renderSkills();
                updatePreview();
            }
            input.value = '';
        }
    });
}

function removeSkill(index) {
    resumeData.skills.splice(index, 1);
    renderSkills();
    updatePreview();
}

// ==================== AI 生成 ====================
async function generateResume() {
    const prompt = document.getElementById('aiPrompt').value.trim();
    if (!prompt) {
        alert('请输入描述');
        return;
    }

    const loading = document.getElementById('aiLoading');
    const btn = document.getElementById('btnAIGenerate');
    loading.classList.add('active');
    btn.disabled = true;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getApiKey()
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{
                    role: 'system',
                    content: '你是一个专业的简历生成助手。根据用户的描述生成JSON格式的简历数据。返回格式：{"name":"姓名","title":"职位","summary":"个人简介","work":[{"company":"公司","role":"职位","time":"时间段","desc":"工作描述（每行以•开头）"}],"skills":["技能1","技能2"],"education":{"school":"学校","major":"专业","time":"时间段"}}'
                }, {
                    role: 'user',
                    content: prompt
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (data.error) {
            if (data.error.type === 'invalid_request_error') {
                alert('API Key 无效或未设置。请点击"设置 API Key"按钮。');
            } else {
                alert('生成失败：' + data.error.message);
            }
            return;
        }

        const result = JSON.parse(data.choices[0].message.content);

        // 更新数据
        if (result.name) document.getElementById('name').value = result.name;
        if (result.title) document.getElementById('title').value = result.title;
        if (result.summary) document.getElementById('summary').value = result.summary;
        if (result.work) {
            resumeData.work = result.work;
            renderWorkItems();
        }
        if (result.skills) {
            resumeData.skills = result.skills;
            renderSkills();
        }
        if (result.education) {
            if (result.education.school) document.getElementById('school').value = result.education.school;
            if (result.education.major) document.getElementById('major').value = result.education.major;
            if (result.education.time) document.getElementById('gradTime').value = result.education.time;
        }

        updatePreview();
        alert('✅ AI 生成成功！请检查并调整内容。');

    } catch (error) {
        console.error(error);
        alert('生成失败，请检查网络连接或 API Key');
    } finally {
        loading.classList.remove('active');
        btn.disabled = false;
    }
}

function getApiKey() {
    // 优先从 localStorage 获取，否则使用默认示例
    let key = localStorage.getItem('openai_api_key');
    if (!key) {
        key = prompt('请输入你的 OpenAI API Key（将保存在本地浏览器中）：\n\n如果没有 API Key，可以：\n1. 去 https://platform.openai.com/api-keys 创建\n2. 或手动填写左侧表单');
        if (key) {
            localStorage.setItem('openai_api_key', key);
        }
    }
    return key || 'sk-demo';
}

// 设置 API Key 按钮
document.addEventListener('DOMContentLoaded', () => {
    init();
    const aiSection = document.querySelector('.ai-section');
    const settingBtn = document.createElement('button');
    settingBtn.className = 'btn btn-outline';
    settingBtn.style.cssText = 'width:100%;margin-top:10px;padding:8px;font-size:12px;';
    settingBtn.textContent = '⚙️ 设置/更换 API Key';
    settingBtn.onclick = () => {
        localStorage.removeItem('openai_api_key');
        alert('已清除保存的 API Key，下次生成时将重新输入。');
    };
    aiSection.appendChild(settingBtn);
});

// ==================== 支付配置 ====================
const PAYMENT_CONFIG = {
    // 支付宝收款码图片地址
    alipayQr: 'https://raw.githubusercontent.com/hwalhg/ResuMate/main/alipay.jpg',

    // 微信收款码图片地址
    wechatQr: 'https://raw.githubusercontent.com/hwalhg/ResuMate/main/wechat.jpg',

    // 价格配置
    prices: {
        single: 3,      // 单份价格
        bundle: 9.9      // 全套价格
    }
};

let selectedPlan = 'bundle'; // 'single' 或 'bundle'
let selectedPaymentMethod = 'alipay'; // 'alipay' 或 'wechat'

// ==================== 导出功能 ====================
function showExportModal() {
    document.getElementById('exportModal').classList.add('active');
}

function hideExportModal() {
    document.getElementById('exportModal').classList.remove('active');
}

function selectPlan(plan) {
    selectedPlan = plan;
    document.getElementById('planSingle').classList.remove('selected');
    document.getElementById('planBundle').classList.remove('selected');
    document.getElementById('plan' + plan.charAt(0).toUpperCase() + plan.slice(1)).classList.add('selected');
}

function showPaymentModal() {
    hideExportModal();

    // 更新支付弹窗信息
    const isBundle = selectedPlan === 'bundle';
    const price = isBundle ? PAYMENT_CONFIG.prices.bundle : PAYMENT_CONFIG.prices.single;
    const desc = isBundle ? '全套模板 - 10套简历模板' : `模板${currentTemplate} - 简历模板`;

    document.getElementById('paymentDesc').textContent = desc;
    document.getElementById('paymentAmount').textContent = `¥${price.toFixed(2)}`;

    // 显示二维码
    updateQRCode();

    document.getElementById('paymentModal').classList.add('active');
}

function hidePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;

    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    updateQRCode();
}

function updateQRCode() {
    const placeholder = document.getElementById('qrPlaceholder');
    const qrUrl = selectedPaymentMethod === 'alipay' ? PAYMENT_CONFIG.alipayQr : PAYMENT_CONFIG.wechatQr;

    if (qrUrl) {
        // 显示实际二维码图片
        placeholder.innerHTML = `<img src="${qrUrl}" alt="支付二维码" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else {
        // 显示占位符（开发者需配置实际二维码）
        placeholder.innerHTML = `
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="7" y="7" width="10" height="10"/>
            </svg>
            <div style="margin-top: 8px;">请配置收款码</div>
        `;
    }
}

function checkPayment() {
    // 在这里实现支付验证逻辑
    // 方式1：简单的密码验证（测试用）
    // 方式2：调用支付回调接口
    // 方式3：用户输入支付凭证，人工审核

    // 简单实现：使用 localStorage 记录支付状态（仅用于演示）
    const paymentVerified = confirm('✅ 确认已完成支付？\n\n点击"确定"将开始下载。');

    if (paymentVerified) {
        // 记录支付（演示用，实际项目需要服务器验证）
        localStorage.setItem(`payment_${selectedPlan}_${Date.now()}`, 'verified');
        doDownload();
    }
}

function doDownload() {
    hidePaymentModal();

    if (selectedPlan === 'bundle') {
        // 下载全套模板
        downloadAllTemplates();
    } else {
        // 下载单份模板
        downloadCurrentTemplate();
    }
}

function downloadCurrentTemplate() {
    const htmlContent = templates[currentTemplate].render();
    const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${resumeData.name} - 简历</title>
<style>${getTemplateStyles()}</style>
</head>
<body>
${htmlContent}
</body>
</html>`;

    downloadFile(fullHtml, `${resumeData.name}_简历_${templates[currentTemplate].name}.html`, 'text/html');
    alert('✅ 下载成功！');
}

function downloadAllTemplates() {
    // 压缩下载所有模板
    // 这里简化为逐个下载
    const templateNames = Object.entries(templates);
    let delay = 0;

    templateNames.forEach(([id, tmpl], index) => {
        setTimeout(() => {
            const htmlContent = tmpl.render();
            const styles = getTemplateStylesFromRender(htmlContent);
            const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${resumeData.name} - 简历</title>
<style>${styles}</style>
</head>
<body>
${htmlContent}
</body>
</html>`;
            downloadFile(fullHtml, `${resumeData.name}_简历_${tmpl.name}.html`, 'text/html');
        }, delay);
        delay += 500; // 间隔500ms下载
    });

    setTimeout(() => {
        alert('✅ 全套模板下载完成！\n共下载 ' + templateNames.length + ' 份模板。');
    }, delay + 500);
}

function exportResume() {
    // 这个函数保留用于免费预览导出（可选）
    const htmlContent = templates[currentTemplate].render();
    const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${resumeData.name} - 简历</title>
<style>${getTemplateStyles()}</style>
</head>
<body>
${htmlContent}
</body>
</html>`;
    downloadFile(fullHtml, `${resumeData.name}_简历.html`, 'text/html');
    hideExportModal();
}

function getTemplateStyles() {
    const template = templates[currentTemplate];
    const html = template.render();
    const match = html.match(/<style>([\s\S]*?)<\/style>/);
    return match ? match[1] : '';
}

// 获取指定模板的样式（用于批量下载）
function getTemplateStylesFromRender(renderedHtml) {
    const match = renderedHtml.match(/<style>([\s\S]*?)<\/style>/);
    return match ? match[1] : '';
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// 点击遮罩关闭弹窗
document.getElementById('exportModal').addEventListener('click', (e) => {
    if (e.target.id === 'exportModal') {
        hideExportModal();
    }
});

document.getElementById('paymentModal').addEventListener('click', (e) => {
    if (e.target.id === 'paymentModal') {
        hidePaymentModal();
    }
});
