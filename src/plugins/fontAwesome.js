import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faExternalLinkAlt, faCog, faCheck, faEdit, faCalendarDay, faUser, faUserCheck, faUsers, faSpinner, faInfo, faQuestion, faFileAlt, faEnvelope, faHandsHelping, faSearch, faExclamationTriangle, faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons"

library.add(faExternalLinkAlt, faCog, faCheck, faEdit, faCalendarDay, faUser, faUserCheck, faUsers, faSpinner, faInfo, faQuestion, faFileAlt, faEnvelope, faHandsHelping, faSearch, faExclamationTriangle, faSignInAlt, faKey)

Vue.component("Icon", FontAwesomeIcon)
