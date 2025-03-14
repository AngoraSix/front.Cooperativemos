import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import FormSkeleton from '../common/Skeletons/FormSkeleton.component';


const STARTNOW_FORM_COMPLETED_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/completed/completed-02.jpg';

const CompletedScreen = ({ wantsContact, onRefillForm, cookiesChecked }) => {
  const { t } = useTranslation('completed');

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
          blurDataURL={STARTNOW_FORM_COMPLETED_IMAGE}
          sx={{ priority: { xs: false, md: true } }}
          fill
          sizes="(max-width: 1000px) 1000px,
                        1000px"
        />
      </Box>
      <Box className="StartNowCompletedScreen__ShortText__Container">
        <Box className="StartNowCompletedScreen__ShortText__Title__Container">
          <Typography variant="overline" color="secondary"
            className="StartNowCompletedScreen__ShortText__Title">{t('startnow.completed.shorttext.title')}</Typography>
        </Box>
        <Typography className='StartNowCompletedScreen__ShortText' variant="subtitle1B">
          {wantsContact
            ? t('startnow.completed.shorttext.contact')
            : t('startnow.completed.shorttext.nocontact')}
        </Typography>
      </Box>


      <Typography className='StartNowCompletedScreen__FillAgain__Text' variant="body2">
        {t('startnow.completed.fillagain.text')}
      </Typography>

      <Button className='StartNowCompletedScreen__FillAgain__Button' variant="contained" onClick={onRefillForm}>
        <Typography className='StartNowCompletedScreen__FillAgain__Button__Text' variant='body2' textTransform={'initial'}>
          {t('startnow.completed.fillagain.label')}
        </Typography>
      </Button>
    </Box>
  );
}

CompletedScreen.propTypes = {
};

export default CompletedScreen;
