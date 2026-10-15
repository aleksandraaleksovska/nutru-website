import { useEffect } from 'react'
import { LocaleLink } from '../components/LocaleLink'
import { useTranslation } from 'react-i18next'

export function PrivacyPolicyPage() {
  const { i18n, t } = useTranslation()
  const isMk = i18n.language?.toLowerCase().startsWith('mk')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  if (isMk) {
    return (
      <article className="min-h-screen bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 [&_li]:leading-7 [&_p]:leading-7">
          <LocaleLink
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('articles.back')}
          </LocaleLink>

          <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Политика за приватност
          </h1>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">1. Вовед</h2>
            <p>
              Оваа Политика за приватност објаснува како Nutru ги собира, користи и заштитува вашите
              лични податоци при користење на мобилната апликација.
            </p>
            <p>
              Nutru е посветен на заштита на вашата приватност и постапува во согласност со
              применливите закони за заштита на податоци, вклучително и Општата регулатива за заштита на
              податоци (GDPR).
            </p>
            <p>Со користење на апликацијата, се согласувате со оваа Политика.</p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">2. Податоци што ги собираме</h2>
            <h3 className="text-lg font-semibold text-stone-900">2.1 Податоци што ги давате</h3>
            <p>
              Личните податоци што ги собираме зависат од вашата интеракција со нас, изборите што ги
              правите и функционалностите што ги користите во апликацијата.
            </p>
            <p>Може да собираме:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> e-пошта (при регистрација)</li>
              <li> лозинка (зачувана во безбеден, хеширан формат)</li>
              <li> статус на претплата и информации за трансакција од продавницата (преку RevenueCat)</li>
              <li> корисничко име</li>
              <li> поставки и преференци</li>
            </ul>
            <p>Не обработуваме чувствителни лични податоци.</p>
            <p>
              Податоци за плаќање: Плаќањата се обработуваат преку App Store/Google Play и RevenueCat.
              Nutru не складира броеви од платежни картички или безбедносни кодови. Добиваме само
              ограничени информации потребни за валидирање на претплата и управување со пристап.
              Политиката за приватност на RevenueCat е достапна на:{' '}
              <a
                className="text-stone-900 underline decoration-stone-300 underline-offset-2"
                href="https://www.revenuecat.com/privacy"
              >
                https://www.revenuecat.com/privacy
              </a>
              .
            </p>
            <p>
              Сите лични податоци што ни ги доставувате треба да бидат точни, целосни и ажурни. Ве
              молиме да нè известите за какви било промени.
            </p>

            <h3 className="text-lg font-semibold text-stone-900">2.2 Податоци што автоматски се собираат</h3>
            <p>
              Автоматски собираме одредени информации кога ја посетувате, користите или прелистувате
              апликацијата. Овие информации вообичаено не ве идентификуваат директно, но може да
              вклучуваат технички и usage податоци потребни за безбедност, стабилност и аналитика.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li> тип на уред</li>
              <li> оперативен систем</li>
              <li> IP адреса</li>
              <li> идентификатори на уред</li>
              <li> јазични преференци</li>
              <li> URL/извор од кој сте дошле</li>
              <li> податоци за користење (analytics)</li>
            </ul>
            <p>Како и многу сервиси, може да користиме колачиња и слични технологии.</p>
            <p>Ова автоматски собрани информации може да вклучуваат:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                 Лог и usage податоци (време на пристап, прегледани екрани, пребарувања, системска
                активност, грешки/краш извештаи)
              </li>
              <li>
                 Податоци за уред (модел на уред, browser тип, интернет провајдер/мобилен оператор,
                оперативен систем, конфигурација)
              </li>
              <li>
                 Податоци за локација (прецизна или непрецизна, според поставките на уредот и
                дозволите)
              </li>
            </ul>
            <p>
              Ги собираме овие податоци за да обезбедиме правилно работење и безбедност на нашата
              платформа и да спречиме измамнички активности врз основа на нашиот легитимен интерес.
            </p>

            <h3 className="text-lg font-semibold text-stone-900">2.3 Податоци од користење на апликацијата</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li> скенирани баркодови</li>
              <li> пребарувања во апликацијата</li>
              <li> интеракции со функционалностите</li>
            </ul>
            <p>Nutru не собира чувствителни здравствени податоци без ваша изречна согласност.</p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">3. Правна основа за обработка (GDPR)</h2>
            <p>Вашите податоци се обработуваат врз основа на:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> ваша согласност</li>
              <li> извршување на услугата (функционирање на апликацијата)</li>
              <li> легитимен интерес (подобрување на услугата и анализа)</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">4. Како ги користиме податоците</h2>
          <p>
            Ги обработуваме вашите податоци за да ги обезбедиме, администрираме и подобриме услугите,
            да комуницираме со вас, да спречиме измами и да ги исполниме законските обврски.
          </p>
          <p>Вашите податоци ги користиме за:</p>
            <ul className="list-disc space-y-2 pl-6">
            <li> олеснување креирање сметка, најава и управување со кориснички профил</li>
            <li> испорака на побараните услуги и функционалности</li>
            <li> одговор на кориснички прашања и поддршка</li>
              <li> функционирање и одржување на апликацијата</li>
              <li> прикажување нутритивни информации</li>
              <li> подобрување на точноста на податоците</li>
              <li> анализа и статистика</li>
              <li> комуникација со корисници (ако е потребно)</li>
            <li> заштита на витални интереси и спречување штета кога е неопходно</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">5. Споделување на податоци</h2>
            <p>Nutru не ги продава вашите лични податоци.</p>
            <p>Може да споделиме податоци со:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> доверливи сервис провајдери (на пр. cloud hosting, analytics)</li>
              <li> законски органи кога тоа е законски задолжително</li>
            </ul>
            <p>Сите трети страни се обврзани да ги заштитуваат податоците.</p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">6. Пренос на податоци надвор од ЕУ</h2>
            <p>
              Доколку користиме сервиси надвор од ЕУ, обезбедуваме соодветни заштитни мерки согласно GDPR
              (на пр. Standard Contractual Clauses).
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">7. Чување на податоци</h2>
            <p>Податоците се чуваат:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> онолку долго колку што е потребно за обезбедување на услугата</li>
              <li> или додека не побарате нивно бришење</li>
              <li> согласно законските обврски</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">8. Безбедност</h2>
            <p>Применуваме технички и организациски мерки за заштита на податоците, вклучувајќи:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> енкрипција</li>
              <li> ограничен пристап</li>
              <li> безбедносни протоколи</li>
            </ul>
            <p>
              Сепак, ниту еден метод на пренос преку Интернет или електронско складирање не е целосно
              безбеден. Додека се стремиме да користиме комерцијално прифатливи средства за заштита на
              вашите лични податоци, не можеме да гарантираме нивна апсолутна безбедност.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">9. Ваши права</h2>
            <p>Согласно GDPR, имате право да:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li> побарате пристап до вашите податоци</li>
              <li> побарате исправка</li>
              <li> побарате бришење ("право да бидете заборавени")</li>
              <li> ограничите обработка</li>
              <li> се спротивставите на обработка</li>
              <li> побарате преносливост на податоци</li>
            </ul>
            <p>За остварување на овие права, контактирајте нè.</p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">10. Колачиња и технологии</h2>
            <p>
              Апликацијата може да користи алатки за анализа (analytics) за подобрување на корисничкото
              искуство.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">11. Приватност на деца</h2>
            <p>
              Нашите услуги не се насочени кон поединци под 18 години. Не собираме свесно лични податоци
              од деца под 18 години.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">12. Измени на политиката</h2>
            <p>Може да ја ажурираме оваа Политика. Промените ќе бидат објавени во апликацијата.</p>
          </section>

          <section className="mt-8 space-y-3 pb-8 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">13. Контакт</h2>
            <p>За прашања поврзани со приватност, контактирајте нè:</p>
            <p>
              e-mail:{' '}
              <a
                className="text-stone-900 underline decoration-stone-300 underline-offset-2"
                href="mailto:nutruapp@gmail.com"
              >
                nutruapp@gmail.com
              </a>
            </p>
            <p>
              За барање бришење на сметка, посетете:{' '}
              <a
                className="text-stone-900 underline decoration-stone-300 underline-offset-2"
                href="https://nutru.app/delete-account"
              >
                https://nutru.app/delete-account
              </a>
            </p>
          </section>
        </div>
      </article>
    )
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 [&_li]:leading-7 [&_p]:leading-7">
        <LocaleLink
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t('articles.back')}
        </LocaleLink>

        <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
          Privacy Policy
        </h1>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">1. Introduction</h2>
          <p>
            This Privacy Policy explains how Nutru collects, uses, and protects your personal data when
            you use the Nutru mobile application (the “App”).
          </p>
          <p>
            We are committed to protecting your privacy and handling your data in accordance with
            applicable data protection laws, including the General Data Protection Regulation (GDPR).
          </p>
          <p>By using the App, you agree to the terms of this Privacy Policy.</p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">2. Data We Collect</h2>
          <h3 className="text-lg font-semibold text-stone-900">2.1 Information You Provide</h3>
          <p>
            The personal information we collect depends on the context of your interactions with us and
            the Services, the choices you make, and the products and features you use.
          </p>
          <p>We may collect the following information:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Email address (when you create an account)</li>
            <li> Password (stored in a secure hashed format)</li>
            <li> Subscription status and store transaction details (via RevenueCat)</li>
            <li> Username</li>
            <li> Preferences and settings</li>
          </ul>
          <p>We do not process sensitive personal information.</p>
          <p>
            Payment Data: Payments are processed through the App Store/Google Play and RevenueCat. Nutru
            does not store card numbers or card security codes. We only receive limited data needed to
            validate subscription status and manage access. You can find RevenueCat&apos;s privacy notice
            here:{' '}
            <a
              className="text-stone-900 underline decoration-stone-300 underline-offset-2"
              href="https://www.revenuecat.com/privacy"
            >
              https://www.revenuecat.com/privacy
            </a>
            .
          </p>
          <p>
            All personal information you provide must be true, complete, and accurate, and you should
            notify us of any changes.
          </p>

          <h3 className="text-lg font-semibold text-stone-900">2.2 Information Collected Automatically</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Services.
            This information does not directly reveal your specific identity, but may include technical
            and usage details needed to maintain security, performance, and reporting.
          </p>
          <p>We may automatically collect:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Device type</li>
            <li> Operating system</li>
            <li> IP address</li>
            <li> Device identifiers</li>
            <li> Language preferences</li>
            <li> Referring URLs</li>
            <li> Usage data (analytics)</li>
          </ul>
          <p>Like many businesses, we may use cookies and similar tracking technologies.</p>
          <p>The information we collect automatically may include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
               Log and Usage Data (service diagnostics, timestamps, pages/screens viewed, searches,
              feature interactions, crash reports, and hardware settings)
            </li>
            <li>
               Device Data (browser type, hardware model, ISP/mobile carrier, operating system, and
              system configuration)
            </li>
            <li>
               Location Data (precise or imprecise location based on your device settings and
              permissions)
            </li>
          </ul>
          <p>
            We collect this information to ensure proper functionality, maintain security, and prevent
            fraudulent or abusive activity, based on our legitimate interest.
          </p>

          <h3 className="text-lg font-semibold text-stone-900">2.3 Data from App Usage</h3>
          <p>When you use the App, we may collect:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Scanned product barcodes</li>
            <li> Search queries</li>
            <li> Interactions with app features</li>
          </ul>
          <p>Nutru does not collect sensitive health data without your explicit consent.</p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">3. Legal Basis for Processing (GDPR)</h2>
          <p>We process your personal data based on:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Your consent</li>
            <li> Performance of a contract (providing the App's functionality)</li>
            <li> Legitimate interests (such as improving the service, analytics, and security)</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">4. How We Use Your Data</h2>
          <p>
            In short, we process your information to provide, improve, and administer our Services,
            communicate with you, support security and fraud prevention, and comply with legal
            obligations.
          </p>
          <p>We use your data to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Facilitate account creation, authentication, and account management</li>
            <li> Deliver and facilitate delivery of requested services</li>
            <li> Respond to inquiries and provide customer support</li>
            <li> Operate and maintain the App</li>
            <li> Provide nutritional information</li>
            <li> Improve data accuracy and service quality</li>
            <li> Perform analytics and statistical analysis</li>
            <li> Communicate with users when necessary</li>
            <li> Save or protect an individual&apos;s vital interests, such as preventing harm</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">5. Sharing of Data</h2>
          <p>Nutru does not sell your personal data.</p>
          <p>We may share your data with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Trusted service providers (e.g., cloud hosting, analytics tools)</li>
            <li> Public authorities when required by law</li>
          </ul>
          <p>
            All third parties are obligated to protect your data and use it only for specified purposes.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">6. International Data Transfers</h2>
          <p>
            If we transfer your data outside the European Economic Area (EEA), we ensure appropriate
            safeguards are in place in accordance with GDPR, such as Standard Contractual Clauses.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">7. Data Retention</h2>
          <p>We retain your data:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> For as long as necessary to provide the service</li>
            <li> Until you request deletion</li>
            <li> As required to comply with legal obligations</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data,
            including:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Encryption</li>
            <li> Access controls</li>
            <li> Security protocols</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is completely
            secure. While we strive to protect your personal data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">9. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li> Access your personal data</li>
            <li> Request correction of inaccurate data</li>
            <li> Request deletion (“right to be forgotten”)</li>
            <li> Restrict processing</li>
            <li> Object to processing</li>
            <li> Request data portability</li>
          </ul>
          <p>To exercise your rights, please contact us using the details below.</p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">10. Cookies and Tracking Technologies</h2>
          <p>
            The App may use analytics tools and similar technologies to improve user experience and
            service performance.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">11. Children's Privacy</h2>
          <p>Our services are not intended for individuals under the age of 18.</p>
          <p>We do not knowingly collect personal data from children under 18.</p>
          <p>If we become aware that we have collected such data, we will take steps to delete it.</p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted within the
            App and will become effective upon publication.
          </p>
        </section>

        <section className="mt-8 space-y-3 pb-8 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">13. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or your data, please contact us:
          </p>
          <p>
            📧 Email:{' '}
            <a className="text-stone-900 underline decoration-stone-300 underline-offset-2" href="mailto:nutruapp@gmail.com">
              nutruapp@gmail.com
            </a>
          </p>
          <p>
            To request account deletion, visit:{' '}
            <a
              className="text-stone-900 underline decoration-stone-300 underline-offset-2"
              href="https://nutru.app/delete-account"
            >
              https://nutru.app/delete-account
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
