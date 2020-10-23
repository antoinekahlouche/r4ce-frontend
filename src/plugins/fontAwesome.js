import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faExternalLinkAlt, faCog, faCheck, faEdit, faCalendarDay, faUser, faUserCheck, faUsers, faSpinner, faInfo, faQuestion, faFileAlt, faEnvelope, faHandsHelping, faSearch, faExclamationTriangle, faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter, faYoutube, faGithub, faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons"

library.add(faExternalLinkAlt, faCog, faCheck, faEdit, faCalendarDay, faUser, faUserCheck, faUsers, faSpinner, faInfo, faQuestion, faFileAlt, faEnvelope, faHandsHelping, faSearch, faExclamationTriangle, faSignInAlt, faKey)
library.add(faFacebook, faInstagram, faTwitter, faYoutube, faGithub, faLinkedin, faTwitch)

Vue.component("Icon", FontAwesomeIcon)
