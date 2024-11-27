import {
  IconBrain,
  IconPassword,
  IconReport,
  IconUserEdit,
  IconUsers,
} from "@tabler/icons-react";
import {
  IconAperture,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconUserPlus,
  IconCubePlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Alterar cadastro",
    icon: IconUserEdit,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Alterar senha",
    icon: IconPassword,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Cadastro de organizações",
  },
  {
    id: uniqueId(),
    title: "Organizações",
    icon: IconCubePlus,
    href: "/organization",
  },
  {
    navlabel: true,
    subheader: "Cadastro de membros",
  },
  {
    id: uniqueId(),
    title: "Membros",
    icon: IconUserPlus,
    href: "/member",
  },
  {
    navlabel: true,
    subheader: "Fábrica de Líderes",
  },
  {
    id: uniqueId(),
    title: "Classes",
    icon: IconBrain,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Membros",
    icon: IconUsers,
    href: "/utilities/shadow",
  },
  {
    id: uniqueId(),
    title: "Relatórios",
    icon: IconReport,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
