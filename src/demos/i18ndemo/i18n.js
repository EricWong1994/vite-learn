import dayjs from 'dayjs';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // fallbackLng 指定了未匹配任何语言时的默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // 这里是我们的翻译文本
          welcome: 'Welcome to my website',
          author: `Author is：<1>code and beast</1>`,
          currentTime: 'Current time is {{time, DD/MM/YY}}',
          "header": {
            "title": "Title",
            "subtitle": "Subtitle"
          },
          "intlNumber": "Some {{val, number}}",
          "intlNumberWithOptions": "Some {{val, number(minimumFractionDigits: 2)}}",
          letter: '转成小写字母: {{val, lowercase}}',
        }
      },
      zh: {
        translation: {
          welcome: '欢迎来到我的网站',
          author: `作者是：<1>代码与野兽</1>`,
          currentTime: '当前时间是 {{time, YYYY-MM-DD}}',
        }
      }
    }
  });

i18next.services.formatter.add('DD/MM/YY', (value, lng, options) => {
  // console.log('dayjs: ', dayjs);// dayjs没引入居然不报错？
  return dayjs(value).format('DD/MM/YY')
});

i18next.services.formatter.add('YYYY-MM-DD', (value, lng, options) => {
  return dayjs(value).format('YYYY-MM-DD')
});

i18next.services.formatter.add('lowercase', (value, lng, options) => {
  return value.toLowerCase();
});

export default i18next;