import { Service, Stat, Testimonial } from './types'

export const services: Service[] = [
  {
    id: 'oil',
    ticketNumber: '01',
    title: 'تبديل زيت وفلاتر',
    description: 'فحص وتبديل الزيت والفلتر بزيوت أصلية مطابقة لموديل سيارتك.',
    price: 'يبدأ من 15$',
  },
  {
    id: 'brakes',
    ticketNumber: '02',
    title: 'فحص وصيانة الفرامل',
    description: 'فحص تيل الفرامل والديسكات، وتبديل القطع المهترئة بأمان.',
    price: 'يبدأ من 25$',
  },
  {
    id: 'diagnostics',
    ticketNumber: '03',
    title: 'تشخيص كمبيوتر السيارة',
    description: 'قراءة أعطال الكمبيوتر وتحديد السبب الجذري قبل أي تصليح.',
    price: 'يبدأ من 10$',
  },
  {
    id: 'tires',
    ticketNumber: '04',
    title: 'إطارات وضبط زوايا',
    description: 'تركيب وموازنة الإطارات، وضبط زوايا العجلات لقيادة أثبت.',
    price: 'يبدأ من 20$',
  },
  {
    id: 'ac',
    ticketNumber: '05',
    title: 'صيانة المكيف',
    description: 'فحص الغاز والكمبروسر وتنظيف الفلاتر لتبريد فعّال بالصيف.',
    price: 'يبدأ من 18$',
  },
  {
    id: 'electrical',
    ticketNumber: '06',
    title: 'أعطال كهرباء السيارة',
    description: 'تتبع أعطال البطارية والدينمو والتوصيلات الكهربائية.',
    price: 'يبدأ من 12$',
  },
]

export const stats: Stat[] = [
  { label: 'سنة خبرة', value: '14' },
  { label: 'سيارة صيانة بالشهر', value: '120+' },
  { label: 'فني متخصص', value: '6' },
  { label: 'ضمان على القطع', value: '3 أشهر' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'أبو خالد',
    car: 'هيونداي إلنترا 2019',
    quote: 'اكتشفوا عطل ما قدرت وياه ورشتين قبلهم، وسعّروا بصراحة من أول يوم.',
  },
  {
    name: 'رهف',
    car: 'كيا سبورتاج 2021',
    quote: 'بيشرحولك شو في وليش، مو بس يطلعوا فاتورة. حسيت إني فاهمة شو صار بسيارتي.',
  },
  {
    name: 'أبو ياسين',
    car: 'تويوتا كورولا 2016',
    quote: 'ورشة منظمة والمواعيد مضبوطة، وما في تلاعب بقطع الغيار.',
  },
]
