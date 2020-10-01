import moment from "moment"
import i18n from "@/plugins/i18n"

moment.defaultFormat = "YYYY-MM-DD"

moment.display = value => moment(value).format(i18n.t("param.date_format"))

export default moment
