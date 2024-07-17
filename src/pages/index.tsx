// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
import Page from '../components/Page';
import { Container, Grid, Stack, StackProps, useTheme } from '@mui/material';
import { AppWelcome, AppFeatured, AppWidgetSummary, AppCurrentDownload, AppAreaInstalled, AppNewInvoice, AppTopRelated, AppTopInstalledCountries, AppTopAuthors, AppWidget } from 'src/sections/@dashboard/general/app';
import useSettings from 'src/hooks/useSettings';
import AppTopContributors from 'src/sections/@dashboard/general/app/AppTopContributors';
import useSuiAuth from '../hooks/useSuiAuth';

HomePage.getLayout = function getLayout(page: React.ReactElement)
{
  return <Layout variant="main">{page}</Layout>;
};

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);
// ----------------------------------------------------------------------

export default function HomePage()
{
  const { user } = useSuiAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="Home">
      <ContentStyle>
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item xs={12} md={4}>
                  <AppWidgetSummary
                    title="Total"
                    percent={25}
                    total={18765}
                    chartColor={theme.palette.primary.main}
                    chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <AppWidgetSummary
                    title="Donations"
                    percent={-5}
                    total={4876}
                    chartColor={theme.palette.chart.blue[0]}
                    chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <AppWidgetSummary
                    title="New donators"
                    percent={5}
                    total={678}
                    chartColor={theme.palette.chart.red[0]}
                    chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppAreaInstalled title='Revenue' />
            </Grid>

            <Grid item xs={12}>
              <AppTopContributors />
            </Grid>

            <Grid item xs={12}>
              <AppNewInvoice />
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </Page>
  );
}

