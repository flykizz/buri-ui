export default {
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  confirm: 'Onayla',
  cancel: 'İptal',
  delete: 'Sil',
  complete: 'Tamamla',
  loading: 'Yükleniyor...',
  telEmpty: 'Lütfen tel. no giriniz',
  nameEmpty: 'Lütfen isim giriniz',
  nameInvalid: 'Geçersiz isim',
  confirmDelete: 'Silmek istediğinize emin misiniz?',
  telInvalid: 'Geçersiz tel. numarası',
  buriCalendar: {
    end: 'Son',
    start: 'Başlat',
    title: 'Takvim',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: Number) => `En fazla ${maxRange} gün seçin`
  },
  buriContactCard: {
    addText: 'Kişi bilgisi ekle'
  },
  buriContactList: {
    addText: 'Yeni kişi ekle'
  },
  buriPagination: {
    prev: 'Önceki',
    next: 'Sonraki'
  },
  buriPullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...'
  },
  buriSubmitBar: {
    label: 'Toplam:'
  },
  buriCoupon: {
    unlimited: 'Sınırsız',
    discount: (discount: number) => `%${discount * 10} indirim`,
    condition: (condition: number) => `En az ${condition}`
  },
  buriCouponCell: {
    title: 'Kupon',
    tips: 'Kupon yok',
    count: (count: number) => `${count} adet teklif var`
  },
  buriCouponList: {
    empty: 'Kupon yok',
    exchange: 'Takas',
    close: 'Kapat',
    enable: 'Mevcut',
    disabled: 'Mevcut değil',
    placeholder: 'Kupon kodu'
  },
  buriAddressEdit: {
    area: 'Alan',
    postal: 'Posta',
    areaEmpty: 'Lütfen alıcı alanını seçin',
    addressEmpty: 'Adres boş olamaz!',
    postalEmpty: 'Yanlış posta kodu',
    defaultAddress: 'Varsayılan adres olarak ayarla',
    telPlaceholder: 'Telefone',
    namePlaceholder: 'İsim',
    areaPlaceholder: 'Alan'
  },
  buriAddressEditDetail: {
    label: 'Adres',
    placeholder: 'Adres'
  },
  buriAddressList: {
    add: 'Yeni adres ekle'
  }
};
