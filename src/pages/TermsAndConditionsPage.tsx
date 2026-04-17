import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function TermsAndConditionsPage() {
  const { t, i18n } = useTranslation()
  const isMk = i18n.language?.toLowerCase().startsWith('mk')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  if (isMk) {
    return (
      <article className="min-h-screen bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 [&_li]:leading-7 [&_p]:leading-7">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('articles.back')}
          </Link>

          <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Услови и Правила
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            Nutru App Датум на стапување во сила: 16 април 2026 Последно ажурирано: 16 април 2026
          </p>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">1. Прифаќање на условите</h2>
            <p>
              Со преземање, инсталирање или користење на мобилната апликација Nutru ("Апликација",
              "Услуга"), се согласувате да бидете обврзани со овие Услови и Правила ("Услови"). Ако не се
              согласувате со овие Услови, не ја користете Апликацијата.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">2. Опис на услугата</h2>
            <p>Nutru е апликација за информации за прехранбени производи која им овозможува на корисниците:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Да скенираат баркодови на производи за добивање нутритивни информации, листа на состојки,
                адитиви и алергени
              </li>
              <li>
                Да поднесуваат нови етикети на производи преку фотографија за OCR-екстракција на податоци
                и преглед од заедницата
              </li>
              <li>Да прегледуваат оценки за здравје и безбедност на прехранбени производи</li>
              <li>Да разгледуваат курирани препораки и истакнати производи</li>
              <li>Да пристапуваат до премиум функционалности преку платена претплата</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">3. Кориснички сметки</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Мора да дадете точни информации при креирање сметка</li>
              <li>Одговорни сте за доверливоста на вашите податоци за најава</li>
              <li>Одговорни сте за сите активности што се случуваат под вашата сметка</li>
              <li>Мора веднаш да нѐ известите за секоја неовластена употреба на сметката</li>
              <li>Го задржуваме правото да прекинеме сметки што ги прекршуваат овие Услови</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">
              4. Податоци за производи и кориснички поднесоци
            </h2>
            <h3 className="text-lg font-semibold text-stone-900">4.1 Поднесување податоци за производи</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Корисниците можат да поднесуваат фотографии од етикети на производи во нашата база</li>
              <li>
                Со поднесување содржина, потврдувате дека имате право на тоа и му давате на Nutru
                неексклузивна, безнадоместна, светска лиценца за користење, чување, обработка и прикажување
                на таа содржина
              </li>
              <li>
                Поднесените фотографии се обработуваат со автоматизиран OCR (оптичко препознавање знаци) и
                AI услуги за екстракција
              </li>
              <li>
                Поднесоците се прегледуваат од нашиот админ тим пред да бидат објавени како активни
                податоци за производи
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-stone-900">4.2 Точност на информациите</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Информациите за производите во Апликацијата потекнуваат од кориснички поднесоци,
                OCR-обработка и рачен внес
              </li>
              <li>
                Nutru не гарантира точност, целосност или ажурност на нутритивните, адитивните или
                алергенските информации
              </li>
              <li>Податоците може да содржат OCR грешки, преводни неточности или застарени информации</li>
              <li>Не се потпирајте исклучиво на Апликацијата за медицински или алергиски одлуки</li>
              <li>
                Секогаш проверете ги критичните алергенски и нутритивни информации директно од физичкото
                пакување на производот
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-stone-900">4.3 Оценки за адитиви и здравје</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Оценките за здравје и сериозност на адитиви се генерираат алгоритамски и служат само за
                информативни цели
              </li>
              <li>
                Тие не претставуваат медицински совет, нутритивна насока или професионална препорака за
                исхрана
              </li>
              <li>Методологиите за оценување може да се менуваат со текот на времето без претходна најава</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">5. Претплати и плаќања</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Одредени функционалности на Апликацијата бараат платена претплата ("Premium")</li>
              <li>
                Претплатите се обработуваат преку Apple App Store или Google Play Store преку RevenueCat
              </li>
              <li>Претплатата се наплаќа на почетокот на секој пресметковен период</li>
              <li>
                Претплатите автоматски се обновуваат освен ако не се откажат најмалку 24 часа пред крајот
                на тековниот период
              </li>
              <li>
                Можете да управувате или откажете претплата преку поставките на вашиот App Store или Google
                Play профил
              </li>
              <li>
                Nutru не обработува директно платежни информации - целото фактурирање го водат соодветните
                продавници
              </li>
              <li>Рефундациите зависат од политиките на Apple App Store или Google Play Store</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">6. Забранета употреба</h2>
            <p>Се согласувате дека нема да:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Поднесувате лажни, погрешни или намерно неточни информации за производи</li>
              <li>Се обидувате да реверс-инженеринг, скрепирање или извлекување податоци од Апликацијата</li>
              <li>Ја користите Апликацијата за каква било незаконска цел</li>
              <li>Се обидувате да добиете неовластен пристап до кој било дел од Услугата</li>
              <li>Прикачувате содржина што ги повредува правата на интелектуална сопственост на други</li>
              <li>Поднесувате содржина со лични податоци на трети лица без нивна согласност</li>
              <li>Користите автоматизирани алатки за поднесување податоци без писмена согласност</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">7. Интелектуална сопственост</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Апликацијата, нејзиниот дизајн, алгоритмите, системите за оценување и оригиналната содржина
                се сопственост на Nutru и се заштитени со применливи закони
              </li>
              <li>Имињата на производи, брендови и трговски марки им припаѓаат на нивните сопственици</li>
              <li>
                Фотографиите поднесени од корисници остануваат сопственост на корисникот, согласно лиценцата
                дадена во Дел 4.1
              </li>
              <li>
                Не смеете да репродуцирате, дистрибуирате или создавате дериватни дела од содржина без
                претходна писмена дозвола
              </li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">8. Приватност и обработка на податоци</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Со користење на Апликацијата се согласувате со нашата Политика за приватност (достапна
                одделно во Апликацијата)
              </li>
              <li>Фотографиите што ги поднесувате се зачувуваат на Azure Blob Storage</li>
              <li>
                Поднесените фотографии може да се обработуваат од трети AI услуги (вклучувајќи Azure AI
                Vision и Azure Document Intelligence) за OCR и екстракција на податоци
              </li>
              <li>Обработените слики може да се чуваат за подобрување на идните екстракции</li>
              <li>Може да се собираат аналитички податоци за подобрување на Услугата</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">9. Услуги од трети страни</h2>
            <p>
              Апликацијата интегрира следни услуги од трети страни, секоја регулирана со сопствени услови:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Microsoft Azure - cloud инфраструктура, blob storage и AI/OCR услуги</li>
              <li>RevenueCat - управување со претплати и in-app купувања</li>
              <li>Apple App Store / Google Play Store - дистрибуција и обработка на плаќања</li>
            </ul>
            <p>
              Не сме одговорни за достапноста, точноста или практиките на овие услуги од трети страни.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">
              10. Одрекување и ограничување на одговорност
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Апликацијата се обезбедува "as is" и "as available" без гаранции од каков било вид,
                изречни или имплицитни
              </li>
              <li>
                Не гарантираме дека Апликацијата ќе биде непрекината, без грешки или без вируси и штетни
                компоненти
              </li>
              <li>
                Во максимален обем дозволен со закон, Nutru не одговара за индиректни, случајни, посебни,
                последователни или казнени штети, вклучително здравствени последици од потпирање на податоци
                од Апликацијата
              </li>
              <li>
                Нашата вкупна одговорност кон вас за било какво побарување нема да го надмине износот што
                сте го платиле за претплата во 12-те месеци пред побарувањето
              </li>
            </ul>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">11. Измени на услугата</h2>
            <p>Го задржуваме правото да:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Измениме, суспендираме или прекинеме дел од Услугата во кое било време</li>
              <li>Ги измениме овие Услови во кое било време со објава во Апликацијата</li>
              <li>Ја измениме цената на претплата со разумно претходно известување</li>
            </ul>
            <p>
              Продолжената употреба на Апликацијата по објавата на измени претставува прифаќање на новите
              Услови.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">12. Прекин</h2>
            <p>
              Можеме да го суспендираме или прекинеме вашиот пристап до Апликацијата по наша единствена
              дискреција, со или без известување, за однесување што сметаме дека ги прекршува овие Услови
              или е штетно за други корисници, за нас или за трети лица.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">13. Меродавно право</h2>
            <p>
              Овие Услови се уредуваат и толкуваат согласно законите на јурисдикцијата во која е
              регистриран Nutru, без примена на правила за судир на закони.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">14. Исправки</h2>
            <p>
              Можно е Услугите да содржат информации со типографски грешки, неточности или пропусти,
              вклучително описи, цени, достапност и други информации. Го задржуваме правото да исправиме
              какви било грешки, неточности или пропусти и да ги измениме или ажурираме информациите во
              Услугите во кое било време, без претходно известување.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">15. Одрекување од одговорност</h2>
            <p>
              Услугите се обезбедуваат на основа "како што се" и "како што се достапни". Се согласувате
              дека користењето на Услугите е на ваш сопствен ризик. Во максимален обем дозволен со закон,
              се одрекуваме од сите гаранции, изречни или имплицитни, поврзани со Услугите и нивната
              употреба, вклучително гаранции за трговска вредност, соодветност за одредена намена и
              неповредување права.
            </p>
            <p>
              Не даваме гаранции за точноста или целосноста на содржината на Услугите или на поврзани
              веб-страници и мобилни апликации, и не преземаме одговорност за: (1) грешки, неточности или
              пропусти во содржина и материјали; (2) лична повреда или имотна штета што произлегува од
              пристап или употреба на Услугите; (3) неовластен пристап до или користење на нашите сервери и
              податоци складирани во нив; (4) прекин или застој во пренос до или од Услугите; (5) багови,
              вируси, тројанци или слично што може да бидат пренесени од трети страни; и (6) какви било
              загуби или штети настанати како резултат на употреба на содржина објавена или пренесена преку
              Услугите.
            </p>
            <p>
              Не гарантираме, не одобруваме и не преземаме одговорност за производ или услуга понудени од
              трети страни преку Услугите, преку поврзани веб-страници или преку реклами. Не сме страна во
              трансакции помеѓу вас и трети даватели на производи или услуги. Како и при секое купување,
              користете разумна проценка и соодветна претпазливост.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">16. Ограничување на одговорност</h2>
            <p>
              Во ниту еден случај ние, нашите директори, вработени или агенти нема да одговараме кон вас
              или трето лице за директни, индиректни, последователни, примерни, случајни, посебни или
              казнени штети, вклучувајќи изгубена добивка, изгубен приход, загуба на податоци или други
              штети што произлегуваат од користењето на Услугите, дури и ако сме биле известени за
              можноста за такви штети.
            </p>
            <p>
              Без оглед на сè спротивно содржано овде, нашата вкупна одговорност кон вас за која било
              причина и без оглед на формата на постапката, секогаш ќе биде ограничена на износот што сте
              го платиле, доколку има таков, во периодот од три (3) месеци пред настанување на причината за
              побарување.
            </p>
          </section>

          <section className="mt-8 space-y-3 pb-8 text-base leading-relaxed text-stone-700">
            <h2 className="text-xl font-semibold text-stone-900">17. Контакт</h2>
            <p>За прашања во врска со овие Услови, контактирајте нѐ на:</p>
            <p>
              Email:{' '}
              <a className="text-stone-900 underline decoration-stone-300 underline-offset-2" href="mailto:nutru.app@gmail.com">
                nutruapp@gmail.com
              </a>
            </p>
            <p>
              Website:{' '}
              <a
                className="text-stone-900 underline decoration-stone-300 underline-offset-2"
                href="https://www.nutru.app"
                target="_blank"
                rel="noreferrer"
              >
                www.nutru.app
              </a>
            </p>
            <p>
              Со користење на Nutru, потврдувате дека сте ги прочитале, разбрале и прифатиле овие Услови и
              Правила.
            </p>
          </section>
        </div>
      </article>
    )
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 [&_li]:leading-7 [&_p]:leading-7">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t('articles.back')}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Nutru App Effective Date: April 16, 2026 Last Updated: April 16, 2026
        </p>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Nutru mobile application ("App", "Service"), you
            agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms,
            do not use the App.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">2. Description of Service</h2>
          <p>Nutru is a food product information application that allows users to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Scan product barcodes to retrieve nutritional information, ingredient lists, additives, and
              allergens
            </li>
            <li>
              Submit new product labels via photo for OCR-based data extraction and community review
            </li>
            <li>View health and safety scores for food products</li>
            <li>Browse curated product recommendations and featured products</li>
            <li>Access premium features through a paid subscription</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">3. User Accounts</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>You must provide accurate information when creating an account</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activity that occurs under your account</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>We reserve the right to terminate accounts that violate these Terms</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">4. Product Data and User Submissions</h2>
          <h3 className="text-lg font-semibold text-stone-900">4.1 Submitting Product Data</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Users may submit photos of product labels for inclusion in our database</li>
            <li>
              By submitting content, you confirm you have the right to do so and grant Nutru a
              non-exclusive, royalty-free, worldwide license to use, store, process, and display that
              content
            </li>
            <li>
              Submitted photos are processed using automated OCR (Optical Character Recognition) and AI
              extraction services
            </li>
            <li>
              Submissions are reviewed by our admin team before being published as live product data
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-stone-900">4.2 Accuracy of Information</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Product information in the App is sourced from user submissions, OCR processing, and manual
              data entry
            </li>
            <li>
              Nutru does not guarantee the accuracy, completeness, or timeliness of any nutritional,
              additive, or allergen information displayed
            </li>
            <li>Data may contain OCR errors, translation inaccuracies, or outdated information</li>
            <li>Do not rely solely on the App for medical, dietary, or allergy-related decisions</li>
            <li>
              Always verify critical allergen and nutritional information directly from the physical
              product packaging
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-stone-900">4.3 Additive and Health Scores</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Health scores and additive severity ratings are generated algorithmically and are for
              informational purposes only
            </li>
            <li>
              They do not constitute medical advice, nutritional guidance, or any form of professional
              dietary recommendation
            </li>
            <li>Score methodologies may change over time without prior notice</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">5. Subscription and Payments</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Certain features of the App require a paid subscription ("Premium")</li>
            <li>Subscriptions are processed through Apple App Store or Google Play Store via RevenueCat</li>
            <li>Subscription fees are charged at the beginning of each billing period</li>
            <li>
              Subscriptions automatically renew unless cancelled at least 24 hours before the end of the
              current period
            </li>
            <li>
              You may manage or cancel your subscription through your App Store or Google Play account
              settings
            </li>
            <li>
              Nutru does not directly process payment information — all billing is handled by the
              respective platform stores
            </li>
            <li>Refunds are subject to the policies of Apple App Store or Google Play Store</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">6. Prohibited Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Submit false, misleading, or deliberately inaccurate product information</li>
            <li>Attempt to reverse engineer, scrape, or extract data from the App or API</li>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Upload content that infringes on intellectual property rights of others</li>
            <li>Submit content containing personal data of third parties without their consent</li>
            <li>Use automated tools to submit product data without prior written consent</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">7. Intellectual Property</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The App, its design, algorithms, scoring systems, and original content are owned by Nutru
              and protected by applicable intellectual property laws
            </li>
            <li>Product names, brand names, and trademarks belong to their respective owners</li>
            <li>
              User-submitted photos remain the property of the submitting user, subject to the license
              granted in Section 4.1
            </li>
            <li>
              You may not reproduce, distribute, or create derivative works from App content without prior
              written permission
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">8. Privacy and Data Processing</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>By using the App you agree to our Privacy Policy (available separately within the App)</li>
            <li>Product photos you submit are uploaded to and stored on Azure Blob Storage</li>
            <li>
              Submitted photos may be processed by third-party AI services (including Azure AI Vision and
              Azure Document Intelligence) for OCR and data extraction purposes
            </li>
            <li>Processed images may be retained to improve the accuracy of future extractions</li>
            <li>Usage analytics may be collected to improve the Service</li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">9. Third-Party Services</h2>
          <p>The App integrates with the following third-party services, each governed by their own terms:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Microsoft Azure — cloud infrastructure, blob storage, and AI/OCR services</li>
            <li>RevenueCat — subscription and in-app purchase management</li>
            <li>Apple App Store / Google Play Store — app distribution and payment processing</li>
          </ul>
          <p>
            We are not responsible for the availability, accuracy, or practices of these third-party
            services.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">
            10. Disclaimers and Limitation of Liability
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The App is provided "as is" and "as available" without warranties of any kind, express or
              implied
            </li>
            <li>
              We do not warrant that the App will be uninterrupted, error-free, or free of viruses or
              other harmful components
            </li>
            <li>
              To the maximum extent permitted by law, Nutru shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to health
              consequences resulting from reliance on App data
            </li>
            <li>
              Our total liability to you for any claim arising from use of the App shall not exceed the
              amount you paid for a subscription in the 12 months preceding the claim
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">11. Changes to the Service</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Modify, suspend, or discontinue any part of the Service at any time</li>
            <li>Change these Terms at any time by posting updated Terms in the App</li>
            <li>Change subscription pricing with reasonable advance notice</li>
          </ul>
          <p>
            Continued use of the App after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">12. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at our sole discretion, with or without
            notice, for conduct that we believe violates these Terms or is harmful to other users, us, or
            third parties.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
            in which Nutru is registered, without regard to conflict of law provisions.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">14. Corrections</h2>
          <p>
            There may be information on the Services that contains typographical errors, inaccuracies, or
            omissions, including descriptions, pricing, availability, and various other information. We
            reserve the right to correct any errors, inaccuracies, or omissions and to change or update the
            information on the Services at any time, without prior notice.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">15. Disclaimer</h2>
          <p>
            The Services are provided on an "as-is" and "as-available" basis. You agree that your use of
            the Services is at your sole risk. To the fullest extent permitted by law, we disclaim all
            warranties, express or implied, in connection with the Services and your use thereof, including
            implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We make no warranties or representations about the accuracy or completeness of the Services'
            content or the content of any websites or mobile applications linked to the Services, and we
            assume no liability or responsibility for: (1) errors, mistakes, or inaccuracies of content and
            materials; (2) personal injury or property damage resulting from your access to and use of the
            Services; (3) unauthorized access to or use of our servers and any personal and/or financial
            information stored therein; (4) any interruption or cessation of transmission to or from the
            Services; (5) bugs, viruses, trojan horses, or similar harmful code that may be transmitted by
            any third party; and/or (6) any errors or omissions in content and materials or any loss or
            damage incurred as a result of use of any content posted, transmitted, or otherwise made
            available via the Services.
          </p>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for any product or service
            advertised or offered by a third party through the Services, any hyperlinked website, or any
            website or mobile application featured in advertising. We will not be a party to, or responsible
            for monitoring, any transaction between you and third-party providers of products or services.
            As with any purchase, use your best judgment and exercise caution where appropriate.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">16. Limitations of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party
            for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages,
            including lost profit, lost revenue, loss of data, or other damages arising from your use of
            the Services, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            Notwithstanding anything to the contrary herein, our liability to you for any cause whatsoever
            and regardless of the form of the action will at all times be limited to the amount paid, if
            any, by you to us during the three (3) month period prior to any cause of action arising.
          </p>
        </section>

        <section className="mt-8 space-y-3 pb-8 text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-semibold text-stone-900">17. Contact</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p>
            Email:{' '}
            <a className="text-stone-900 underline decoration-stone-300 underline-offset-2" href="mailto:nutru.app@gmail.com">
              nutruapp@gmail.com
            </a>
          </p>
          <p>
            Website:{' '}
            <a
              className="text-stone-900 underline decoration-stone-300 underline-offset-2"
              href="https://www.nutru.app"
              target="_blank"
              rel="noreferrer"
            >
              www.nutru.app
            </a>
          </p>
          <p>
            By using Nutru, you acknowledge that you have read, understood, and agree to be bound by these
            Terms and Conditions.
          </p>
        </section>
      </div>
    </article>
  )
}
