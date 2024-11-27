"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const SamplePage = () => {
  return (
    <PageContainer
      title="Cadastro de Membros"
      description="Esta página cadastra membros"
    >
      <DashboardCard title="Cadastro de Membros">
        <Typography>
          Esta página cadastra membros e associa à um Clube
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
