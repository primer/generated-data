export type UserData = typeof userdata;
export type UserDataItems = typeof userdata[number];
export type Usernames = UserDataItems['login'];

export const userdata = 
[
  { name: 'Fernanda Sarmento', login: 'fernflare' },
  { name: 'Gleb Seleznyov', login: 'glebosonic' },
  { name: 'Pavel Bezrukov', login: 'pavbez' },
  { name: 'Hank Zoeng', login: 'hankzolo' },
  { name: 'Julian Hsiao', login: 'hsiaohype' },
  { name: 'Myung', login: 'Ok Yoo' },
  { name: 'Chandrika Gupta', login: 'chandriverse' },
  { name: 'Ólafur Magnússon', login: 'magnusflare' },
  { name: 'Rajab Quraishi', login: 'rajqflow' },
  { name: 'Anastasiya Sazonova', login: 'anasazon' },
  { name: 'Semyon Maslov', login: 'semyonrush' },
  { name: 'Carla Costa', login: 'carlawander' },
  { name: 'Rodrigo Botas', login: 'rodbotas6' },
  { name: 'Vasily Butusov', login: 'vastibot' },
  { name: 'Raymonda Khouri', login: 'khayrizen' },
  { name: 'Barbara Dias', login: 'babsdias' },
  { name: 'Hamed Bettar', login: 'hamedvoyage' },
  { name: 'Bernardo Cardoso', login: 'bernardopulse' },
  { name: 'Ines Vaz', login: 'inesvibe' },
  { name: 'Artur Cunha', login: 'arturcraft' }
] as const
