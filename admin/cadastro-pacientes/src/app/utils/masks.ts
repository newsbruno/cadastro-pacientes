export class Masks {
  public celularMask = [
    "(",
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  public telefoneMask = [
    "(",
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  public cpf = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ".",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ".",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  public validadeCarteirinha = [
    /[0-9]/,
    /[0-9]/,
    "/",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
  ];
}
