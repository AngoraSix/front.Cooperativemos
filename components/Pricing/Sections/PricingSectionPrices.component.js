import { Box, Button, Divider, Typography, Paper } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { PRICING_QUERY_PARAMS } from "../Pricing.properties"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const PricingSectionPrices = ({
  title,
  description,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  buttonText,
  recommendedText,
  plan,
  featured = false,
}) => (
  <Paper
    elevation={featured ? 6 : 1}
    className={`SectionPrices__Price__Container ${featured ? "SectionPrices__Price__Container--featured" : ""}`}
  >
    {featured && (
      <Box className="SectionPrices__Price__Featured">
        <Typography variant="caption" className="SectionPrices__Price__Featured__Text">
          {recommendedText}
        </Typography>
      </Box>
    )}
    <Box className="SectionPrices__Price__Title__Container">
      <Typography variant="h4" className="SectionPrices__Price__Title">
        {title}
      </Typography>
    </Box>
    <Box className="SectionPrices__Price__Description__Container">
      <Typography variant="body1" className="SectionPrices__Price__Description">
        {description}
      </Typography>
    </Box>
    <Box className="SectionPrices__Price__Bullet__Container">
      <ul className="SectionPrices__Price__Bullet">
        <li className="SectionPrices__Price__Bullet__Item">
          <CheckCircleIcon className="SectionPrices__Price__Bullet__Icon" />
          <Typography variant="body2" component="span" className="SectionPrices__Price__Text">
            {bullet1}
          </Typography>
        </li>
        <li className="SectionPrices__Price__Bullet__Item">
          <CheckCircleIcon className="SectionPrices__Price__Bullet__Icon" />
          <Typography variant="body2" component="span" className="SectionPrices__Price__Text">
            {bullet2}
          </Typography>
        </li>
        <li className="SectionPrices__Price__Bullet__Item">
          <CheckCircleIcon className="SectionPrices__Price__Bullet__Icon" />
          <Typography variant="body2" component="span" className="SectionPrices__Price__Text">
            {bullet3}
          </Typography>
        </li>
        <li className="SectionPrices__Price__Bullet__Item">
          <CheckCircleIcon className="SectionPrices__Price__Bullet__Icon" />
          <Typography variant="body2" component="span" className="SectionPrices__Price__Text">
            {bullet4}
          </Typography>
        </li>
      </ul>
    </Box>
    <Box className="SectionPrices__Price__StartNow__Container">
      <Link href={`/start-now?${PRICING_QUERY_PARAMS.plan}=${plan}`}>
        <Button
          variant={featured ? "contained" : "outlined"}
          color={featured ? "primary" : "secondary"}
          className={`SectionPrices__Price__StartNow__Button ${featured ? "SectionPrices__Price__StartNow__Button--featured" : ""}`}
        >
          <Typography
            className="SectionPrices__Price__StartNow__Button__Text"
            variant="body2"
            textTransform={"initial"}
          >
            {buttonText}
          </Typography>
        </Button>
      </Link>
    </Box>
  </Paper>
)

const SectionPrices = ({}) => {
  const { t } = useTranslation("pricing")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  return (
    <Box className="SectionPrices__Container">
      <Box className="SectionPrices__Header">
        <Typography variant="h3" className="SectionPrices__Header__Title">
          {t("pricing.section.title")}
        </Typography>
        <Typography variant="body1" className="SectionPrices__Header__Subtitle">
          {t("pricing.section.subtitle")}
        </Typography>
      </Box>

      <Box className="SectionPrices__Cards">
        <PricingSectionPrices
          title={t("pricing.prices.1.title")}
          description={t("pricing.prices.1.description")}
          bullet1={t("pricing.prices.1.bullet1")}
          bullet2={t("pricing.prices.1.bullet2")}
          bullet3={t("pricing.prices.1.bullet3")}
          bullet4={t("pricing.prices.1.bullet4")}
          plan="free"
          buttonText={t("pricing.prices.1.button")}
        />

        {!isMobile && <Divider className="SectionPrices__Divider" orientation="vertical" flexItem />}
        {isMobile && <Divider className="SectionPrices__Divider" orientation="horizontal" flexItem />}

        <PricingSectionPrices
          title={t("pricing.prices.2.title")}
          description={t("pricing.prices.2.description")}
          bullet1={t("pricing.prices.2.bullet1")}
          bullet2={t("pricing.prices.2.bullet2")}
          bullet3={t("pricing.prices.2.bullet3")}
          bullet4={t("pricing.prices.2.bullet4")}
          plan="plus"
          buttonText={t("pricing.prices.2.button")}
          featured={true}
          recommendedText={t("pricing.prices.2.recommended")}
        />

        {!isMobile && <Divider className="SectionPrices__Divider" orientation="vertical" flexItem />}
        {isMobile && <Divider className="SectionPrices__Divider" orientation="horizontal" flexItem />}

        <PricingSectionPrices
          title={t("pricing.prices.3.title")}
          description={t("pricing.prices.3.description")}
          bullet1={t("pricing.prices.3.bullet1")}
          bullet2={t("pricing.prices.3.bullet2")}
          bullet3={t("pricing.prices.3.bullet3")}
          bullet4={t("pricing.prices.3.bullet4")}
          plan="mega"
          buttonText={t("pricing.prices.3.button")}
        />
      </Box>

      <Box className="SectionPrices__Footer">
        <Typography variant="body2" className="SectionPrices__Footer__Text">
          {t("pricing.footer.text", "All plans include basic support. For premium support, contact us.")}
        </Typography>
      </Box>
    </Box>
  )
}

SectionPrices.propTypes = {}

export default SectionPrices
