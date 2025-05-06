import { Box, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { PRICING_QUERY_PARAMS } from '../Pricing.properties';

const PriceComponent = ({ title, description, bullet1, bullet2, bullet3, bullet4, buttonText, plan }) => (
  <Box className="SectionPrices__Price__Container">
    <Box className="SectionPrices__Price__Title__Container">
      <Typography variant="h4"
        className="SectionPrices__Price__Title">{title}</Typography>
    </Box>
    <Box className="SectionPrices__Price__Description__Container">
      <Typography variant="body4"
        className="SectionPrices__Price__Description">{description}</Typography>
    </Box>
    <ul className="SectionPrices__Price__Bullet">
      <li><Typography variant="body4" component="span"
        className="SectionPrices__Price__Text">{bullet1}</Typography></li>
      <li><Typography variant="body4" component="span"
        className="SectionPrices__Price__Text">{bullet2}</Typography></li>
      <li><Typography variant="body4" component="span"
        className="SectionPrices__Price__Text">{bullet3}</Typography></li>
      <li><Typography variant="body4" component="span"
        className="SectionPrices__Price__Text">{bullet4}</Typography></li>
    </ul>
    <Box className="SectionPrices__Price__StartNow__Container">
      <Link href={`/start-now?${PRICING_QUERY_PARAMS.plan}=${plan}`}>
        <Button variant="contained" >
          <Typography className="SectionPrices__Price__StartNow__Button__Text" variant="body2" textTransform={'initial'}>{buttonText}</Typography>
        </Button>
      </Link>
    </Box>
  </Box>)

const SectionPrices = ({ }) => {
  const { t } = useTranslation('pricing');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="SectionPrices__Container">
      <PriceComponent
        title={t('pricing.prices.1.title')}
        description={t('pricing.prices.1.description')}
        bullet1={t('pricing.prices.1.bullet1')}
        bullet2={t('pricing.prices.1.bullet2')}
        bullet3={t('pricing.prices.1.bullet3')}
        bullet4={t('pricing.prices.1.bullet4')}
        plan="free"
        buttonText={t('pricing.prices.1.button')} />
      <Divider className='SectionPrices__Divider' variant="middle" orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />
      <PriceComponent
        title={t('pricing.prices.2.title')}
        description={t('pricing.prices.2.description')}
        bullet1={t('pricing.prices.2.bullet1')}
        bullet2={t('pricing.prices.2.bullet2')}
        bullet3={t('pricing.prices.2.bullet3')}
        bullet4={t('pricing.prices.2.bullet4')}
        plan="plus"
        buttonText={t('pricing.prices.2.button')}
      />
      <Divider className='SectionPrices__Divider' variant="middle" orientation={isMobile ? 'horizontal' : 'vertical'} flexItem  />
      <PriceComponent
        title={t('pricing.prices.3.title')}
        description={t('pricing.prices.3.description')}
        bullet1={t('pricing.prices.3.bullet1')}
        bullet2={t('pricing.prices.3.bullet2')}
        bullet3={t('pricing.prices.3.bullet3')}
        bullet4={t('pricing.prices.3.bullet4')}
        plan="mega"
        buttonText={t('pricing.prices.3.button')} />
    </Box>
  );
};

SectionPrices.propTypes = {
};

export default SectionPrices;
