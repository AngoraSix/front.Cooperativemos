import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  MobileStepper,
  Select,
  Slider,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import FormSkeleton from '../common/Skeletons/FormSkeleton.component';


const STARTNOW_FORM_CONTRIBUTE_IMAGE = 'https://storage.googleapis.com/media.angorasix.com/landing/v2/startnow/startnow-01.jpg';

const StartNow = ({
  // Step logic
  activeStep,
  totalSteps,
  handleNext,
  handleBack,

  // Step 1 fields
  email,
  setEmail,
  roleOptions,
  role,
  setRole,
  companySize,
  setCompanySize,
  coopType,
  setCoopType,
  coopTypeKeys,
  wantsContact,
  setWantsContact,
  defaultTools,
  selectedTools,
  toggleTool,
  newTool,
  setNewTool,
  handleAddNewTool,

  // Step 2
  defaultFeatures,
  selectedFeatures,
  toggleFeature,
  newFeature,
  setNewFeature,
  handleAddNewFeature,

  // Step 3
  fairPrice,
  setFairPrice,
  priceMarks,

  // submission
  onSubmit,
  cookiesChecked,

  // others
  showEmailError,
  setShowEmailError,
}) => {
  const { t } = useTranslation('start-now');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!cookiesChecked) {
    return (<Box className="StartNow StartNow__Container">
      <FormSkeleton />
    </Box>
    );
  }

  // Renders the form content for the current step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (<Box>
          <Box className="StartNow__Step__Description__Container">
            <Typography className="StartNow__Step__Description" variant="body1">
              {t(`startnow.form.step.description.1`)}
            </Typography>
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label={t('startnow.form.fields.emailorwhapp.label')}
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // If they start typing, we can optionally clear the error:
                if (showEmailError && e.target.value.trim()) {
                  setShowEmailError(false);
                }
              }}
              error={showEmailError} // shows red border if required but empty
              helperText={
                showEmailError
                  ? t('startnow.form.fields.emailorwhapp.helperText')
                  : ""
              }
            />
            <FormControlLabel
              className='StartNow__WantsContact__FormControlLabel'
              control={
                <Checkbox
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                  checked={wantsContact}
                  onChange={(e) => {
                    setWantsContact(e.target.checked);
                    // If the user unchecks, remove the error
                    if (!e.target.checked) {
                      setShowEmailError(false);
                    }
                  }}
                />
              }
              label={t('startnow.form.fields.wantscontact.label')}
              componentsProps={{ typography: { variant: 'body2' } }}
            />
          </Box>
          <Box mb={3}>

          </Box>
          <Box mb={3}>
            <Autocomplete
              freeSolo
              options={roleOptions.map((option) => option.label)}
              value={role}
              onChange={(event, newValue) => {
                // if newValue is an existing option, store it
                setRole(newValue || '');
              }}
              // Called on every keystroke, which captures freeSolo text input
              onInputChange={(event, newInputValue) => {
                setRole(newInputValue || '');
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t('startnow.form.fields.role.label')}
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="company-size-label">
                {t('startnow.form.fields.size.selectlabel')}
              </InputLabel>
              <Select
                labelId="company-size-label"
                id="company-size-select"
                value={companySize}
                label={t('startnow.form.fields.size.selectlabel')}
                onChange={(e) => setCompanySize(e.target.value)}
              >
                {/* The empty value to show a placeholder */}
                <MenuItem value="">
                  <em>{t('startnow.form.fields.size.selectplaceholder')}</em>
                </MenuItem>
                <MenuItem value="one">
                  {t('startnow.form.fields.size.one')}
                </MenuItem>
                <MenuItem value="two-five">
                  {t('startnow.form.fields.size.two-five')}
                </MenuItem>
                <MenuItem value="six-ten">
                  {t('startnow.form.fields.size.six-ten')}
                </MenuItem>
                <MenuItem value="eleven-fifty">
                  {t('startnow.form.fields.size.eleven-fifty')}
                </MenuItem>
                <MenuItem value="fiftyone-twohundred">
                  {t('startnow.form.fields.size.fiftyone-twohundred')}
                </MenuItem>
                <MenuItem value="more">
                  {t('startnow.form.fields.size.more')}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="coopType-label">
                {t('startnow.form.fields.cooptype.label')}
              </InputLabel>
              <Select
                className='StartNow__CoopType__Select'
                labelId="coopType-label"
                id="coopType-select"
                value={coopType}
                label={t('startnow.form.fields.cooptype.label')}
                onChange={(e) => setCoopType(e.target.value)}
              >
                <MenuItem value="">
                  <em>{t('startnow.form.fields.cooptype.placeholder')}</em>
                </MenuItem>

                {coopTypeKeys.map((key) => (
                  <MenuItem key={key} value={key}>
                    {t(key)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom>
              {t('startnow.form.fields.tools.instructions')}
            </Typography>

            {/* Default tool checkboxes */}
            {defaultTools.map((toolKey) => (
              <FormControlLabel
                key={toolKey}
                className='StartNow__DefaultTool__FormControlLabel'
                control={
                  <Checkbox
                    checked={selectedTools.includes(toolKey)}
                    onChange={() => toggleTool(toolKey)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                  />
                }
                label={t(toolKey)}
                sx={{ display: 'block', ml: 0 }}
                componentsProps={{ typography: { variant: 'body1' } }}
              />
            ))}

            {/* Custom user-added tools */}
            {selectedTools
              .filter((f) => !defaultTools.includes(f)) // only show custom
              .map((customF) => (
                <FormControlLabel
                  key={customF}
                  className='StartNow__CustomTool__FormControlLabel'
                  control={
                    <Checkbox
                      checked={selectedTools.includes(customF)}
                      onChange={() => toggleTool(customF)}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                    />
                  }
                  label={customF} // user-typed text
                  sx={{ display: 'block', ml: 0 }}
                />
              ))}

            {/* Add new tool textfield + button */}
            <Box display="flex" gap={2} mt={2}>
              <TextField
                className='StartNow__NewTool__TextField'
                label={t('startnow.form.fields.tools.newtool')}
                variant="outlined"
                size="small"
                value={newTool}
                onChange={(e) => setNewTool(e.target.value)}
              />
              <Button onClick={handleAddNewTool}>
                <Typography className="StartNow__Button__Text" variant='body2'>
                  {t('startnow.form.fields.tools.addButton')}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>

        );
      case 1:
        return (
          <>
            <Box>
              <Typography variant="body1" gutterBottom>
                {t('startnow.form.fields.features.instructions')}
              </Typography>

              {/* Default feature checkboxes */}
              {defaultFeatures.map((featureKey) => (
                <FormControlLabel
                  key={featureKey}
                  className='StartNow__DefaultFeature__FormControlLabel'
                  control={
                    <Checkbox
                      checked={selectedFeatures.includes(featureKey)}
                      onChange={() => toggleFeature(featureKey)}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                    />
                  }
                  label={t(featureKey)}
                  sx={{ display: 'block', ml: 0 }}
                  componentsProps={{ typography: { variant: 'body1' } }}
                />
              ))}

              {/* Custom user-added features */}
              {selectedFeatures
                .filter((f) => !defaultFeatures.includes(f)) // only show custom
                .map((customF) => (
                  <FormControlLabel
                    key={customF}
                    className='StartNow__CustomFeature__FormControlLabel'
                    control={
                      <Checkbox
                        checked={selectedFeatures.includes(customF)}
                        onChange={() => toggleFeature(customF)}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                      />
                    }
                    label={customF} // user-typed text
                    sx={{ display: 'block', ml: 0 }}
                  />
                ))}

              {/* Add new feature textfield + button */}
              <Box display="flex" gap={2} mt={2}>
                <TextField
                  className='StartNow__NewFeature__TextField'
                  label={t('startnow.form.fields.features.newfeature')}
                  variant="outlined"
                  size="small"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                />
                <Button variant="text" onClick={handleAddNewFeature}>
                  <Typography className="StartNow__Button__Text" variant='body2'>
                    {t('startnow.form.fields.features.addButton')}
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box >
              <Box className="StartNow__PricingRange_Container" mb={3}>
                <Typography variant="body1" gutterBottom>
                  {t('startnow.form.fields.pricerange.title')}
                </Typography>
                <Slider
                  value={fairPrice !== null ? fairPrice : 0}
                  step={1}
                  marks={isMobile ? true : priceMarks.map((m) => ({
                    value: m.value,
                    label: t(m.labelKey)
                  }))}
                  min={0}
                  max={5}
                  onChangeCommitted={(_, newValue) => {
                    setFairPrice(newValue);
                  }}
                />
                {fairPrice === 0 ? (
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {t('startnow.form.fields.pricerange.noselection')}
                  </Typography>
                ) : (
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {t('startnow.form.fields.pricerange.selected', {
                      selectedValue: t(
                        priceMarks.find((m) => m.value === fairPrice)?.labelKey
                      )
                    })}
                  </Typography>
                )}
              </Box>
            </Box >
          </>);
      default:
        return <Box>{'Unknown Step'}</Box>;
    }
  };

  // Renders step navigation depending on desktop vs mobile
  const renderStepper = (stepContent) => {
    const isLastStep = activeStep === totalSteps - 1;
    const isFirstStep = activeStep === 0;
    return isMobile ? (
      <Box>
        <Box className="StartNow__Stepper__Steps__Container">
          {stepContent}
        </Box>
        <MobileStepper
          className="StartNow__Stepper__Mobile__Actions"
          variant="text"
          steps={totalSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              variant="contained"
              onClick={isLastStep ? onSubmit : handleNext}>
              <Typography className="StartNow__Button__Text" variant="body2">
                {isLastStep ? t('startnow.form.submit') : t('startnow.form.steps.next')}
              </Typography>
            </Button>
          }
          backButton={
            <Button onClick={handleBack} disabled={isFirstStep}>
              <Typography className="StartNow__Button__Text" variant="body2">
                {t('startnow.form.steps.back')}
              </Typography>
            </Button>
          }
        />
      </Box>
    ) : (
      <>
        <Stepper className="StartNow__Stepper__Desktop" activeStep={activeStep} sx={{ mb: 2 }}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Step key={index}>
              <StepLabel>{t(`startnow.form.steps.${index + 1}`)}</StepLabel>
            </Step>
          ))}
        </Stepper>


        <Box className="StartNow__Stepper__Steps__Container">
          {stepContent}
        </Box>

        {/* Desktop Next/Back buttons */}
        <Box className="StartNow__Stepper__Desktop__Actions" mb={2}>
          <Button disabled={isFirstStep} onClick={handleBack}>
            <Typography className="StartNow__Button__Text" variant='body2'>
              {t('startnow.form.steps.back')}
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={isLastStep ? onSubmit : handleNext}
          >
            <Typography className="StartNow__Button__Text" variant='body2'>
              {isLastStep ? t('startnow.form.submit') : t('startnow.form.steps.next')}
            </Typography>
          </Button>
        </Box>


        <Box className="StartNow__Stepper__Steps__Count">
          <Typography variant='subtitle2'>
            {t(`startnow.form.steps.count.${activeStep + 1}`)}
          </Typography>
        </Box>
      </>
    );
  };


  return (
    <Box className="StartNow StartNow__Container">
      <Box className="StartNow__Title__Container">
        <Typography variant="h4" className="StartNow__Title">{t('startnow.form.title')}</Typography>
      </Box>
      <Box className="StartNow__Form__Image__Container">
        <Image
          className="StartNow__Form__Image"
          src={STARTNOW_FORM_CONTRIBUTE_IMAGE}
          alt="Contribute"
          title="Contribute"
          placeholder="blur"
          blurDataURL={STARTNOW_FORM_CONTRIBUTE_IMAGE}
          sx={{ priority: { xs: false, md: true } }}
          fill
          sizes="(max-width: 1000px) 1000px,
                  // (max-width: 1000px) 1000px,
                  1000px"
        />
      </Box>
      <Box className="StartNow__ShortText__Container">
        <Box className="StartNow__ShortText__Title__Container">
          <Typography variant="overline" color="secondary"
            className="StartNow__ShortText__Title">{t('startnow.form.shorttext.title')}</Typography>
        </Box>
        <Typography variant="body1" className="StartNow__ShortText">
          {t('startnow.form.shorttext')}
        </Typography>
      </Box>
      {renderStepper(renderStepContent(activeStep))}
    </Box>
  )
};

StartNow.propTypes = {
};

export default StartNow;
