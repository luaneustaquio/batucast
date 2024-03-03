import { mdiLambda, mdiSigma, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Stack, Typography } from "@mui/joy";

const HistoryOptions = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
      sx={{ borderRadius: 8, p: 1 }}
    >
      <Typography level="h2">Histórico</Typography>

      <Stack
        direction="row"
        justifyContent="end"
        alignItems="center"
        spacing={4}
        sx={{ borderRadius: 8, p: 1 }}
      >
        <Button
          onClick={function () {}}
          variant="outlined"
          color="neutral"
          startDecorator={<Icon path={mdiSigma} size={1} />}
        >
          Estatísticas
        </Button>

        <Button
          onClick={function () {}}
          variant="outlined"
          color="danger"
          startDecorator={<Icon path={mdiTrashCanOutline} size={1} />}
        >
          Limpar Histórico
        </Button>
      </Stack>
    </Stack>
  );
};

export default HistoryOptions;