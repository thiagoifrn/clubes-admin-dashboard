"use client";
import { FormHelperText, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { organizationTypes, regions, clubTypes } from "./organizationData"; // Ajuste o caminho conforme necessário

const OrganizationForm = () => {
  const [organizationType, setOrganizationType] = useState("");
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [region, setRegion] = useState("");
  const [clubType, setClubType] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({ organizationType, name, abbreviation, region, clubType });
  };
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Cadastro de Organizações">
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel
                id="organization-type-label"
                sx={{ top: organizationType ? "-10px" : "initial" }}
                shrink={!!organizationType}
              >
                Tipo de Organização
              </InputLabel>
              <Select
                labelId="organization-type-label"
                value={organizationType}
                onChange={(e) => setOrganizationType(e.target.value)}
                required
              >
                {organizationTypes.map((org) => (
                  <MenuItem key={org.value} value={org.value}>
                    {org.label}
                  </MenuItem>
                ))}
              </Select>{" "}
            </FormControl>

            {organizationType && (
              <>
                <TextField
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {organizationType !== "Clube" && (
                  <TextField
                    label="Abreviação"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={abbreviation}
                    onChange={(e) => setAbbreviation(e.target.value)}
                    required
                  />
                )}
                {organizationType === "Clube" && (
                  <>
                    <FormControl fullWidth margin="normal">
                      <InputLabel
                        id="region-label"
                        sx={{ top: region ? "-10px" : "initial" }}
                        shrink={!!region}
                      >
                        Região
                      </InputLabel>
                      <Select
                        labelId="region-label"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                      >
                        {regions.map((region) => (
                          <MenuItem key={region.value} value={region.value}>
                            {region.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel
                        id="club-type-label"
                        sx={{ top: clubType ? "-10px" : "initial" }}
                        shrink={!!clubType}
                      >
                        Tipo de Clube
                      </InputLabel>
                      <Select
                        labelId="club-type-label"
                        value={clubType}
                        onChange={(e) => setClubType(e.target.value)}
                        required
                      >
                        {clubTypes.map((clube) => (
                          <MenuItem key={clube.value} value={clube.value}>
                            {clube.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              </>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Cadastrar
            </Button>
          </form>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default OrganizationForm;
