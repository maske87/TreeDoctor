export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/bootstrap-vue-icons'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icons: true,
    config: {
      breakpoints: [
        'xs',
        'sm',
        'md',
        'lg',
        'xxl'
      ],
      formControls: {
        size: null
      },
      BAlert: {
        dismissLabel: 'Close',
        variant: 'info'
      },
      BAvatar: {
        variant: 'secondary'
      },
      BBadge: {
        variant: 'secondary'
      },
      BButton: {
        size: null,
        variant: 'secondary'
      },
      BButtonClose: {
        content: '&times;',
        textVariant: null,
        ariaLabel: 'Close'
      },
      BCalendar: {
        labelPrevYear: 'Previous year',
        labelPrevMonth: 'Previous month',
        labelCurrentMonth: 'Current month',
        labelNextMonth: 'Next month',
        labelNextYear: 'Next year',
        labelToday: 'Today',
        labelSelected: 'Selected date',
        labelNoDateSelected: 'No date selected',
        labelCalendar: 'Calendar',
        labelNav: 'Calendar navigation',
        labelHelp: 'Use cursor keys to navigate calendar dates'
      },
      BCardSubTitle: {
        subTitleTextVariant: 'muted'
      },
      BCarousel: {
        labelPrev: 'Previous Slide',
        labelNext: 'Next Slide',
        labelGotoSlide: 'Goto Slide',
        labelIndicators: 'Select a slide to display'
      },
      BDropdown: {
        toggleText: 'Toggle Dropdown',
        size: null,
        variant: 'secondary',
        splitVariant: null
      },
      BFormDatepicker: {
        labelPrevYear: null,
        labelPrevMonth: null,
        labelCurrentMonth: null,
        labelNextMonth: null,
        labelNextYear: null,
        labelToday: null,
        labelSelected: null,
        labelNoDateSelected: null,
        labelCalendar: null,
        labelNav: null,
        labelHelp: null,
        labelTodayButton: 'Select today',
        labelResetButton: 'Reset',
        labelCloseButton: 'Close'
      },
      BFormFile: {
        browseText: 'Browse',
        placeholder: 'No file chosen',
        dropPlaceholder: 'Drop files here'
      },
      BFormTag: {
        removeLabel: 'Remove tag',
        variant: 'secondary'
      },
      BFormTags: {
        addButtonText: 'Add',
        addButtonVariant: 'outline-secondary',
        duplicateTagText: 'Duplicate tag(s)',
        invalidTagText: 'Invalid tag(s)',
        placeholder: 'Add tag...',
        tagRemoveLabel: 'Remove tag',
        tagRemovedLabel: 'Tag removed',
        tagVariant: 'secondary'
      },
      BFormText: {
        textVariant: 'muted'
      },
      BFormTimepicker: {
        labelNoTimeSelected: null,
        labelSelected: null,
        labelHours: null,
        labelMinutes: null,
        labelSeconds: null,
        labelAmpm: null,
        labelAm: null,
        labelPm: null,
        labelDecrement: null,
        labelIncrement: null,
        labelNowButton: 'Select now',
        labelResetButton: 'Reset',
        labelCloseButton: 'Close'
      },
      BFormSpinbutton: {
        labelDecrement: 'Decrement',
        labelIncrement: 'Increment'
      },
      BImg: {
        blankColor: 'transparent'
      },
      BImgLazy: {
        blankColor: 'transparent'
      },
      BInputGroup: {
        size: null
      },
      BJumbotron: {
        bgVariant: null,
        borderVariant: null,
        textVariant: null
      },
      BListGroupItem: {
        variant: null
      },
      BModal: {
        titleTag: 'h5',
        size: 'md',
        headerBgVariant: null,
        headerBorderVariant: null,
        headerTextVariant: null,
        headerCloseVariant: null,
        bodyBgVariant: null,
        bodyTextVariant: null,
        footerBgVariant: null,
        footerBorderVariant: null,
        footerTextVariant: null,
        cancelTitle: 'Cancel',
        cancelVariant: 'secondary',
        okTitle: 'OK',
        okVariant: 'primary',
        headerCloseContent: '&times;',
        headerCloseLabel: 'Close'
      },
      BNavbar: {
        variant: null
      },
      BNavbarToggle: {
        label: 'Toggle navigation'
      },
      BPagination: {
        size: null
      },
      BPaginationNav: {
        size: null
      },
      BPopover: {
        boundary: 'scrollParent',
        boundaryPadding: 5,
        customClass: null,
        delay: 50,
        variant: null
      },
      BProgress: {
        variant: null
      },
      BProgressBar: {
        variant: null
      },
      BSpinner: {
        variant: null
      },
      BTable: {
        selectedVariant: 'active',
        headVariant: null,
        footVariant: null
      },
      BTime: {
        labelNoTimeSelected: 'No time selected',
        labelSelected: 'Selected time',
        labelHours: 'Hours',
        labelMinutes: 'Minutes',
        labelSeconds: 'Seconds',
        labelAmpm: 'AM/PM',
        labelAm: 'AM',
        labelPm: 'PM',
        labelIncrement: null,
        labelDecrement: null
      },
      BToast: {
        toaster: 'b-toaster-top-right',
        autoHideDelay: 5000,
        variant: null,
        toastClass: null,
        headerClass: null,
        bodyClass: null
      },
      BToaster: {
        ariaLive: null,
        ariaAtomic: null,
        role: null
      },
      BTooltip: {
        boundary: 'scrollParent',
        boundaryPadding: 5,
        customClass: null,
        delay: 50,
        variant: null
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact'
  }
}
