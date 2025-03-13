import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import FormSkeleton from '../common/Skeletons/FormSkeleton.component';


const STARTNOW_FORM_COMPLETED_IMAGE = 'http://34.49.93.68/landing/startnow/completed.gif';
const STARTNOW_FORM_COMPLETED_IMAGE_500 = 'http://34.49.93.68/landing/startnow/completed-500.gif';

const CompletedScreen = ({ wantsContact, onRefillForm, cookiesChecked }) => {
  const { t } = useTranslation('landing');

  if (!cookiesChecked) {
    return (<Box className="StartNowCompletedScreen__Container">
      <FormSkeleton />
    </Box>
    );
  }

  return (
    <Box className="StartNowCompletedScreen__Container">
      <Box className="StartNowCompletedScreen__Image__Container">
        <Image
          className="StartNowCompletedScreen__Image"
          src={STARTNOW_FORM_COMPLETED_IMAGE}
          alt="Completed"
          title="Completed"
          placeholder="blur"
          blurDataURL={STARTNOW_FORM_COMPLETED_IMAGE_500}
          sx={{ priority: { xs: false, md: true } }}
          fill
          sizes="(max-width: 1000px) 1000px,
                        1000px"
        />
      </Box>
      <Typography className='StartNowCompletedScreen__ShortText' variant="h6">
        {wantsContact
          ? t('startnow.completed.shorttext.contact')
          : t('startnow.completed.shorttext.nocontact')}
      </Typography>

      <Typography className='StartNowCompletedScreen__FillAgain__Text' variant="h6">
        {t('startnow.completed.fillagain.text')}
      </Typography>

      <Button variant="contained" onClick={onRefillForm}>
        {t('startnow.completed.fillagain.label')}
      </Button>
    </Box>
  );
}

CompletedScreen.propTypes = {
};

export default CompletedScreen;
