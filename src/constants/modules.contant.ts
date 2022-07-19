export const APP_MODULES = {
  fipeTable: 1,
  exercises: 2,
};

export const APP_MODULES_DESCRIPTION = {
  [APP_MODULES.fipeTable]: "Tabela Fipe",
  [APP_MODULES.exercises]: "Exercicios",
};

export const APP_MODULE_HOME = {
  [APP_MODULES.fipeTable]: "fipe-table",
  [APP_MODULES.exercises]: "exercise",
};

export const APP_MODULES_ITEMS = Object.entries(APP_MODULES_DESCRIPTION).map(
  ([id, label]) => ({
    id,
    label,
    homeURL: APP_MODULE_HOME[id],
  })
);
