export default {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  complete: 'Completado',
  loading: 'Cargando...',
  telEmpty: 'Por favor rellena el teléfono',
  nameEmpty: 'Por favor rellena el nombre',
  nameInvalid: 'nombre inválido',
  confirmDelete: 'Estás seguro de eliminarlo?',
  telInvalid: 'Teléfono inválido',
  buriCalendar: {
    end: 'Fin',
    start: 'Comienzo',
    title: 'Calendario',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: Number) => `Elija no más de ${maxRange} días`
  },
  buriContactCard: {
    addText: 'Añadir información de contacto'
  },
  buriContactList: {
    addText: 'Añadir nuevo contacto'
  },
  buriPagination: {
    prev: 'Anterior',
    next: 'Siguiente'
  },
  buriPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...'
  },
  buriSubmitBar: {
    label: 'Total：'
  },
  buriCoupon: {
    unlimited: 'Ilimitado',
    discount: (discount: number) => `${discount * 10}% de descuento`,
    condition: (condition: number) => `Al menos ${condition}`
  },
  buriCouponCell: {
    title: 'Cupón',
    tips: 'Sin cupones',
    count: (count: number) => `You have ${count} coupons`
  },
  buriCouponList: {
    empty: 'Sin cupones',
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón'
  },
  buriAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto',
    telPlaceholder: 'Teléfono',
    namePlaceholder: 'Nombre',
    areaPlaceholder: 'Área'
  },
  buriAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección'
  },
  buriAddressList: {
    add: 'Anadir dirección'
  }
};
