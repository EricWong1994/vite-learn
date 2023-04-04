import dayjs from 'dayjs';
import { useTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' },
};
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div >
      <header>
        <select name="" id="" onChange={(evt) => {
          i18n.changeLanguage(evt.target.value);
          console.log('evt.target.value: ', evt.target.value);
        }}>
          {Object.keys(lngs).map((lng) => (<option key={lng} value={lng} label={lngs[lng].nativeName} style={{ fontWeight: i18n.resolvedLanguage === 'lng' ? 'bold' : 'normal' }}>
          </option>)
          )}
        </select>
      </header>
      <h2>{t('header.title')}</h2>
      <main>
        <p>
          {t('welcome')}
        </p>

        <Trans i18nKey="author">
          作者是: <code>{Date.now()}</code>
        </Trans>
        <h1>
          {t('currentTime', { time: dayjs() })}
        </h1>
        <p>
          {t('currentTime', { time: dayjs().format('MM/DD/YYYY') })}
        </p>
        <div>-----------------------</div>
        <h2>官方示例：</h2>
        <p>{i18next.t('intlNumber', { val: 1000 })}</p>
        {/* // 保留三位小数 --> Some 1,000.100 */}
        <p>{i18next.t('intlNumber', { val: 1000.1, minimumFractionDigits: 3 })}</p>
        <p>{i18next.t('intlNumber', { val: 1000.1, formatParams: { val: { minimumFractionDigits: 3 } } })}</p>
        <p>{i18next.t('intlNumberWithOptions', { val: 2000 })}</p>
        <p>{i18next.t('intlNumberWithOptions', { val: 2000, minimumFractionDigits: 3 })}</p>

        HelloWorld
        <h2>{i18next.t('letter', { val: 'HelloWorld' })}</h2>
      </main>
    </div>
  );
}

export default App;