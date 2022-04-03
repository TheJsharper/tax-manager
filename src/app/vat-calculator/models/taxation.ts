export interface Tax {
  countries: Countries[];
}

export interface Countries {
  country: string;
  taxes?: string[];
  name: string;
}

export const taxes: Tax = {
  countries: [
    {
      country: 'Afghanistan',
      taxes: ['20%[2]', '0%[3]', '20%[3]', '0%[4]'],
      name: 'Taxation in Afghanistan',
    },
    {
      country: 'Albania',
      taxes: [
        '15%[5]',
        '0%[6]',
        '23%[6]',
        '20% (standard rate)6% (tourism services)[7]',
      ],
      name: 'Taxation in Albania',
    },
    {
      country: 'Algeria',
      taxes: [
        '26% (highest rate)19% (lowest rate)[8]',
        '0%[9]',
        '35%[9]',
        '19% (standard rate)[10]9% (basic items)[10]',
      ],
      name: 'Taxation in Algeria',
    },
    {
      country: 'American Samoa',
      taxes: ['34% [5]', '4%[11][12]', '6%[12]', '0%[13][12]'],
      name: 'Taxation in American Samoa',
    },
    {
      country: 'Andorra',
      taxes: [
        '10%[14]',
        '0%[15]',
        '10%[15]',
        '4.5% (standard rate)9.5% (banking services)2.5%, 1% or 0% (reduced rates)[16]',
      ],
      name: 'Taxation in Andorra',
    },
    {
      country: 'Angola',
      taxes: ['30%[17]', '0%[17]', '17%[17]', '10%[17]'],
      name: 'Taxation in Angola',
    },
    {
      country: 'Anguilla',
      taxes: ['0%[18]', '0%[18]', '0%[18]', '0%[18]'],
      name: 'Taxation in Anguilla',
    },
    {
      country: 'Antigua and Barbuda',
      taxes: ['25%[19]', '0%[20]', '0%[20]', '15%[21]'],
      name: '15%[21]',
    },
    {
      country: 'Argentina',
      taxes: [
        '30% for residents and 15% for non residents since 2021[22]',
        '9%[22]',
        '35%[22]',
        '21%[22]',
      ],
      name: 'Taxation in Argentina',
    },
    {
      country: 'Armenia',
      taxes: ['18%[23]', '22%[23]', '22%[23]', '20%[23]'],
      name: 'Taxation in Armenia',
    },
    {
      country: 'Aruba',
      taxes: ['25%[24]', '7%[24]', '58.95%[24]', '1.5% (turnover tax)[24]'],
      name: 'Taxation in Aruba',
    },
    {
      country: 'Australia',
      taxes: [
        '30% (standard rate)26% (base entity rate)[25][Note 1]',
        '0%[25]',
        '45%[26][Note 2]',
        '10% (standard rate)0% (essential items)[25]',
        '50%',
      ],
      name: 'Taxation in Australia',
    },
    {
      country: 'Austria',
      taxes: [
        '25%[27]',
        '0%[27]',
        '55%[27]',
        '20% (standard rate)13% (tourism services)10% (basic items)[27]',
        '27.5%',
      ],
      name: 'Taxation in Austria',
    },
    {
      country: 'Azerbaijan',
      taxes: ['20%[28]', '14%[28]', '25%[28]', '18%[28]'],
      name: 'Taxation in Azerbaijan',
    },
    {
      country: 'Azores',
      taxes: [
        '13.6% (available to SMEs and applicable up to a taxable profit of 16.8% (general rate)',
        '0.0% (for monthly salaries up to  + social security charges[30]',
        '36.2% (for monthly salaries  + social security charges[31]',
        '4% (reduced rate)n9% (intermediate rate)n18% (standard rate)[29]',
      ],
      name: 'Taxation in Portugal',
    },
    {
      country: 'Bahamas[32]',
      taxes: [
        '0%[33]',
        '0%',
        '0% + 8.8% social security tax',
        '12% (standard rate)[34]',
      ],
      name: 'Taxation in the Bahamas',
    },
    {
      country: 'Bahrain',
      taxes: ['0%[35]', '0%', '0%', '10% (standard rate)0% (essential goods)'],
      name: 'Taxation in Bahrain',
    },
    {
      country: 'Bangladesh[36]',
      taxes: ['32.5%[37]', '0%', '25%', '15%'],
      name: 'Taxation in Bangladesh',
    },
    {
      country: 'Barbados[citation needed]',
      taxes: [
        '5.5% (on profits not over BBD$1 million)3.0% (over BBD$1 million but not over BBD$20 million)2.5% (over BBD$20 million but not over BBD$30 million)1.0% (over BBD$30 million)[38]',
        '25%',
        '38%',
        '17.5% (standard rate)7.5% (hotel services)',
      ],
      name: 'Taxation in Barbados',
    },
    {
      country: 'Belarus[39]',
      taxes: ['18%', '13%', '17%', '20% (standard rate)10% (reduced rate)'],
      name: 'Taxation in Belarus',
    },
    {
      country: 'Belgium[36]',
      taxes: [
        '25%[40]',
        '25%',
        '79.5%  (20.5% (mandatory social security tax)  50% (federal)[41]  30-89EUR (regional)  3-9% (municipal)[42])',
        '21% (standard rate)12% (restaurants)6% (essential and selected goods)',
      ],
      name: 'Taxation in Belgium',
    },
    {
      country: 'Belize',
      name: 'Taxation in Belize',
      taxes: ['0%', '25%', '12.5%'],
    },
    {
      country: 'Benin[citation needed]',
      taxes: ['35%', '10%', '35%', '18%'],
      name: 'Taxation in Benin',
    },
    {
      country: 'Bermuda',
      taxes: ['0%[43]', '0%', '0%', '0%'],
      name: 'Taxation in Bermuda',
    },
    {
      country: 'Bhutan',
      taxes: ['26%', '0%', '25%[44]'],
      name: 'Taxation in Bhutan',
    },
    {
      country: 'Bolivia',
      taxes: ['29%', '0%', '25%', '13%'],
      name: 'Taxation in Bolivia',
    },
    {
      country: 'Bosnia and Herzegovina',
      taxes: ['10%[45]', '10%', '10%', '17%[45]'],
      name: 'Taxation in Bosnia and Herzegovina',
    },
    {
      country: 'Botswana',
      taxes: ['22%', '0%', '25%', '14%'],
      name: 'Taxation in Botswana',
    },
    {
      country: 'Brazil[36]',
      taxes: [
        '15% [46]',
        '0%[47]',
        '27.5%',
        '17%, 18%, 19% (state tax rate)  0% to 300% (federal tax rate) [48][Note 3]',
        '15%',
      ],
      name: 'Taxation in Brazil',
    },
    {
      country: 'Brunei',
      taxes: ['20%', '0%', '0%'],
      name: 'Taxation in Brunei',
    },
    {
      country: 'Bulgaria',
      taxes: [
        '10% (+ 5% on distribution of profit)',
        '10%',
        '10% + 18% social security fund tax',
        '20%  (9 percent on hotel and camping accommodation)',
      ],
      name: 'Taxation in Bulgaria',
    },
    {
      country: 'Burkina Faso',
      taxes: ['27.5%', '0%', '25%', '18%'],
      name: 'Taxation in Burkina Faso',
    },
    {
      country: 'Burundi[50]',
      taxes: ['35%', '0%', '35%', '18%'],
      name: 'Taxation in Burundi',
    },
    {
      country: 'Cambodia',
      taxes: ['20%', '0%', '20%', '10%'],
      name: 'Taxation in Cambodia',
    },
    {
      country: 'Cameroon[39]',
      taxes: ['31.5%', '10%', '35%', '19.25%'],
      name: 'Taxation in Cameroon',
    },
    {
      country: 'Canada',
      taxes: [
        '26.5-31% (higher rate)9-13% (lower rate)[51]',
        '19% (15% federal + 4% in Nunavut)[52] to 27.53% (12.53% federal + 15% in Quebec)[53][54][55]',
        '44.5% (33% federal + 11.5% in Nunavut) to 54% (33% federal + 21% in Nova Scotia)[52][55]',
        '5% (5% federal tax in Alberta) to 15% (5% federal tax + 10% provincial tax in New Brunswick)[56]',
        '27%',
      ],
      name: 'Taxation in Canada',
    },
    {
      country: 'Cape Verde',
      taxes: ['25%', '16.5%', '27.5%', '15%'],
      name: 'Taxation in Cape Verde',
    },
    {
      country: 'Cayman Islands',
      taxes: ['0%[57]', '0%[57]', '0%[57]', '0%[57][58][Note 4]'],
      name: 'Taxation in the Cayman Islands',
    },
    {
      country: 'Central African Republic',
      taxes: ['30%[59]', '50%[59]', '19%'],
      name: 'Taxation in the Central African Republic',
    },
    {
      country: 'Chad',
      name: 'Taxation in Chad',
    },
    {
      country: 'Chile[60]',
      taxes: [
        '27%[61]',
        '0% (for monthly taxable incomes not over US$950)',
        '35% (for monthly taxable incomes over US$8400)[62]',
        '19%',
      ],
      name: 'Taxation in Chile',
    },
    {
      country: 'China[36]',
      taxes: [
        '25% (standard rate)[63]n15% (concession rate for high-tech companies)[64]',
        '0%',
        '45%[65][66]',
        '13% (standard rate)[49]9% (energy, books, transportation, etc.)6% (other services)0% (goods and services for export)',
        '20%',
      ],
      name: 'Taxation in China',
    },
    {
      country: 'Colombia[39]',
      taxes: [
        '35%[67]',
        '0%[68]',
        '35% (non-labor income)39% (labor income)[68]',
        '19% (standard rate)5% or 0% (reduced rates)',
      ],
      name: 'Taxation in Colombia',
    },
    {
      country: 'Comoros',
      name: 'Taxation in Comoros',
    },
    {
      country: 'Cook Islands',
      taxes: ['30% (highest rate)20% (lowest rate)', '18.5%', '30%', '15%'],
      name: 'Taxation in Cook Islands',
    },
    {
      country: 'DR Congo',
      taxes: ['35%', '0%', '40%', '20% (highest rate)5% (lowest rate)'],
      name: 'Taxation in the Democratic Republic of the Congo',
    },
    {
      country: 'Congo',
      taxes: ['30%[69]', '18.9%[70]'],
      name: 'Taxation in the Republic of the Congo',
    },
    {
      country: 'Costa Rica',
      taxes: [
        '30%',
        '0%',
        '25%',
        '13% (standard rate)4% (private healthcare and plane tickets)2% (medicines and private education)1% (essential foods and agriculture)[71]',
      ],
      name: 'Taxation in Costa Rica',
    },
    {
      country: 'Croatia[39]',
      taxes: [
        '18% (for profits over 3 million kn)12% (for profits not over 3 million kn)',
        '12%',
        '40%',
        '25% (standard rate)[72]13% (certain essential groceries)',
        '10%',
      ],
      name: 'Taxation in Croatia',
    },
    {
      country: 'Cuba[73]',
      taxes: ['30%', '15%', '50%', '20% (highest rate)2.5% (lowest rate)'],
      name: 'Taxation in Cuba',
    },
    {
      country: 'CuraÃ§ao',
      taxes: ['22%', '9.75%', '46.5%', '6%, 7% or 9%'],
      name: 'Taxation in CuraÃ§ao',
    },
    {
      country: 'Cyprus[36]',
      taxes: [
        '12.5%',
        '0%',
        '35%',
        '19% (standard rate)5% or 0% (reduced rates)',
        '20%',
      ],
      name: 'Taxation in Cyprus',
    },
    {
      country: 'Czech Republic[74][75]',
      taxes: [
        '19%[76]',
        '20.1% (15% deductible tax + 45% medicare and social security if an employee, 22.5% if self-employed)[77]',
        '45.7% (peaks for employee gross annual income of $90,000 or more)39% (for gross annual income of $450,000 or more)',
        '21% (standard rate)[78]15% or 10% (reduced rates)',
        '15%',
      ],
      name: 'Taxation in the Czech Republic',
    },
    {
      country: 'Denmark[79]',
      taxes: [
        '22-25% (depending on business)',
        '39.8596% (34.63% for unemployed; first DKK46,000 / US$7,245 / per year is deductible)[80][81]',
        '55.8584%[80]',
        '25%',
        '42%',
      ],
      name: 'Taxation in Denmark',
    },
    {
      country: 'Djibouti',
      name: 'Taxation in Djibouti',
    },
    {
      country: 'Dominica',
      taxes: ['25%[82]', '0%', '35%', '15%'],
      name: 'Taxation in Dominica',
    },
    {
      country: 'Dominican Republic',
      taxes: ['27%', '0%', '25%', '18%'],
      name: 'Taxation in Dominican Republic',
    },
    {
      country: 'East Timor',
      name: 'Taxation in East Timor',
    },
    {
      country: 'Ecuador',
      taxes: [
        '25%[83]',
        '0%',
        '35%',
        '12% (standard rate)15% (luxury goods)0% (exports)',
        '35%',
      ],
      name: 'Taxation in Ecuador',
    },
    {
      country: 'Egypt[84]',
      taxes: [
        '22.5% (on taxable corporate profits)(+ 5% on distribution of profit)',
        '0%',
        '22.5%',
        '14% (standard rate)10% (professional services)0% (exports)',
      ],
      name: 'Taxation in Egypt',
    },
    {
      country: 'El Salvador',
      taxes: ['30%', '0%', '30%', '13%'],
      name: 'Taxation in El Salvador',
    },
    {
      country: 'Equatorial Guinea',
      name: 'Taxation in Equatorial Guinea',
    },
    {
      country: 'Eritrea',
      name: 'Taxation in Eritrea',
    },
    {
      country: 'Estonia [85]',
      taxes: [
        '20% (14% on regular dividends)',
        '20% (+ 33% social tax)(0% on dividends)(7% on regular dividends)',
        '20% (+ 33% social tax)(0% on dividends)(7% on regular dividends)',
        '20% (standard rate)9% (reduced rate)',
        '20%',
      ],
      name: 'Taxation in Estonia',
    },
    {
      country: 'Eswatini (Swaziland)',
      taxes: ['27.5%', '33%', '33%', '15%'],
      name: 'Taxation in Eswatini',
    },
    {
      country: 'Ethiopia',
      name: 'Taxation in Ethiopia',
    },
    {
      country: 'Falkland Islands',
      taxes: ['26%', '0%', '26%', '0%'],
      name: 'Taxation in Falkland Islands',
    },
    {
      country: 'Micronesia',
      name: 'Taxation in Micronesia',
    },
    {
      country: 'Fiji',
      taxes: ['20%[86]', '0%', '20%', '9%'],
      name: 'Taxation in Fiji',
    },
    {
      country: 'Finland',
      taxes: [
        '20%[87]',
        '0% + 8.40% social security tax[88]',
        '66.75%   in Halsua for the members of the Orthodox Church of Finland (31.25% national tax rate + 23.5% municipal tax + 9.9% social security tax + 2.1% church tax)[89]',
        '24% (standard rate)14% (food and fodder)10% (medicines and public transport)',
        '34%',
      ],
      name: 'Taxation in Finland',
    },
    {
      country: 'France',
      taxes: [
        '26.5% (on profits over 15% ',
        '0%',
        '49% (45% + 4% tax on high incomes, or incomes ',
        '20% (standard rate)10% (restaurants, transportation and tourism services)5.5% (utilities)2.1% (press)',
        '30%',
      ],
      name: 'Taxation in France',
    },
    {
      country: 'Gabon',
      taxes: ['35%', '5%', '35%', '18%'],
      name: 'Taxation in Gabon',
    },
    {
      country: 'Gambia',
      taxes: ['31%', '0%', '30%'],
      name: 'Taxation in Gambia',
    },
    {
      country: 'Germany',
      taxes: [
        '29.65%[91]',
        '14% are free of income tax)',
        '47.475% (45% income tax + 5.5% solidarity surcharge based on the total tax bill)',
        '19% (standard rate)7% (reduced rate)',
        '25%',
      ],
      name: 'Taxation in Germany',
    },
    {
      country: 'Georgia[92]',
      taxes: [
        '0% (15% on distribution of profit)',
        '20% (5% on dividend, interest and royalty)',
        '20% (5% on dividend, interest and royalty)',
        '18%',
      ],
      name: 'Taxation in Georgia',
    },
    {
      country: 'Ghana',
      name: 'Taxation in Ghana',
      taxes: ['3%'],
    },
    {
      country: 'Gibraltar',
      taxes: ['10%', '17%', '40%', '0%'],
      name: 'Taxation in Gibraltar',
    },
    {
      country: 'Greece',
      taxes: [
        '22%',
        '9% (zero tax for annual income under )',
        '44%',
        '24% (standard rate)13% (food, health and tourism services)6% (theater tickets, books and medicine)VAT is reduced by 30% for the islands of Leros, Lesvos, Kos, Samos, Chios (i.e., 17%, 9%, 4%).',
        '15%',
      ],
      name: 'Taxation in Greece',
    },
    {
      country: 'Grenada',
      name: 'Taxation in Grenada',
    },
    {
      country: 'Guatemala[39]',
      taxes: ['25%', '5%', '7%', '12%'],
      name: 'Taxation in Guatemala',
    },
    {
      country: 'Guinea',
      name: 'Taxation in Guinea',
    },
    {
      country: 'Guinea-Bissau',
      name: 'Taxation in Guinea-Bissau',
    },
    {
      country: 'Guyana[93]',
      taxes: [
        '30%',
        '28% on Annual Salary Less Than $1,560,000 GYD.[94]',
        '40% on Annual Salary Above $1,560,000 GYD.[94]',
        '14% (standard rate)0% (reduced rate)',
      ],
      name: 'Taxation in Guyana[94]',
    },
    {
      country: 'Guernsey',
      taxes: ['0%[95]', '0%', '20%', '0%[96]'],
      name: 'Taxation in Guernsey',
    },
    {
      country: 'Haiti',
      taxes: ['30%[97]', '0%', '30%[98]', '10%[97]'],
      name: 'Taxation in Haiti',
    },
    {
      country: 'Honduras',
      name: 'Taxation in Honduras',
    },
    {
      country: 'Hong Kong[99]',
      taxes: [
        '16.5% (on profits over HK$2 million)8.25% (on profits not over HK$2 million)',
        '0%',
        '15%',
        '0%',
      ],
      name: 'Taxation in Hong Kong',
    },
    {
      country: 'Hungary',
      taxes: [
        '9%',
        '15%',
        '15%',
        '27% (standard rate)18% (reduced rate)5% (milk, egg, pork, chicken meat, internet service, restaurant services, medicines and books)',
        '15%',
      ],
      name: 'Taxation in Hungary',
    },
    {
      country: 'Iceland[39]',
      taxes: [
        '20%',
        '0% (On income up to 152.807 ISK)[100]',
        '46%',
        '24% (standard rate)11% (reduced rate)',
        '22%',
      ],
      name: 'Taxation in Iceland',
    },
    {
      country: 'India',
      taxes: [
        '22% (highest)15% (lowest)n[inclusive of surcharge &amp; cess][101]',
        '0% ¹ 0 - 250,000 5%  250,001 - 500,000 20%  500,001 - 1,000,000 Scheme I (with deductions) 0%  0 - 500,000 10%  500,001 - 750,000 15%  750,001 - 1,000,000 20%  1,000,001 - 1,250,000 25%  1,250,001 - 1,500,000 Scheme II (without deductions)',
        '30% 1,000,001 &amp; +  Scheme I (with deductions) 30%  1,500,001 &amp; + Scheme II (without deductions)n4% cess and highest surcharge of 37% is applied on income tax. This makes the effective tax rate 42.74%.',
        '28%, 18%, 12%, 5%, 0% (varies by commodity; see GST rates in India)[102][103]',
        '15%',
      ],
      name: 'Taxation in India',
    },
    {
      country: 'Indonesia',
      taxes: ['22%', '5%', '35%', '11%'],
      name: 'Taxation in Indonesia',
    },
    {
      country: 'Iran',
      taxes: ['25%', '0%', '35%', '9% (highest rate)0% (reduced rate)'],
      name: 'Taxation in Iran',
    },
    {
      country: 'Iraq',
      taxes: ['15%[104]', '3%[105]', '15%', '0-300%[106]'],
      name: 'Taxation in Iraq',
    },
    {
      country: 'Ireland',
      taxes: [
        '12.5%',
        '20% (first 650 per year is deductible)',
        '52% (40% income tax + 12% social insurance contributions on incomes above 70,000)',
        '23% (goods)(services)0% (certain items of food)',
        '33%',
      ],
      name: 'Taxation in Ireland',
    },
    {
      country: 'Isle of Man',
      taxes: ['0%', '10%', '20%', '20% (standard rate)5% (home renovations)'],
      name: 'Taxation in Isle of Man',
    },
    {
      country: 'Israel',
      taxes: [
        '23%[107]',
        '0% (for monthly income under )',
        '50%',
        '17% (standard rate)0% (fruits, vegetables and public transport)',
        '25%',
      ],
      name: 'Taxation in Israel',
    },
    {
      country: 'Italy',
      taxes: [
        '27.9% (24% + 3.9% (municipal))',
        'from 23% (first er year is deductible) to 43%',
        '47% (43% income tax + 4% special added tax)',
        '22% (standard rate)10% (reduced rate)4% (food and books)',
        '27.5%',
      ],
      name: 'Taxation in Italy',
    },
    {
      country: 'Ivory Coast',
      name: 'Taxation in Ivory Coast',
    },
    {
      country: 'Jamaica',
      taxes: [
        '33.3% (standard rate)25% (reduced rate for small companies)',
        '0%',
        '25% (on income over J$1,500,000)',
        '20% (services)16.5% (goods)',
      ],
      name: 'Taxation in Jamaica',
    },
    {
      country: 'Japan[108]',
      taxes: [
        '29.74%[109]',
        '15.105% (5.105% national + 10% local)',
        '55.945% (45.945% national + 10% local)',
        '10% (standard rate)8% (groceries and takeout food)',
      ],
      name: 'Taxation in Japan',
    },
    {
      country: 'Jersey[36]',
      taxes: ['0%', '0%', '20%[110]', '5%[111]'],
      name: 'Taxation in Jersey',
    },
    {
      country: 'Jordan[39]',
      taxes: ['20%', '0%', '25% [112]', '16%'],
      name: 'Taxation in Jordan',
    },
    {
      country: 'Kazakhstan[39]',
      taxes: [
        '20%[91][2]',
        '10%',
        '10% (for residents)15% (for non-residents)',
        '13%',
      ],
      name: 'Taxation in Kazakhstan',
    },
    {
      country: 'Kenya',
      taxes: [
        '30%[91]',
        '10%',
        '30% (for citizens)35% (for non-citizens)',
        '16% (standard rate)12% (electricity and fuel)0% (food)',
      ],
      name: 'Taxation in Kenya',
    },
    {
      country: 'Kiribati',
      name: 'Taxation in Kiribati',
    },
    {
      country: 'Kosovo[a][113]',
      taxes: [
        '10% (highest rate)0% (lowest rate)',
        '0%',
        '10%',
        '18% (standard rate)8% (basic items)',
      ],
      name: 'Taxation in Kosovo',
    },
    {
      country: 'Kuwait',
      taxes: ['0%', '0%', '0%', '0%'],
      name: 'Taxation in Kuwait',
    },
    {
      country: 'North Korea[114]',
      taxes: ['25%', '0%', '20%', '4% (highest rate)2% (lowest rate)'],
      name: 'Taxation in North Korea',
    },
    {
      country: 'South Korea[39]',
      taxes: ['24.2%[91]', '6% + 1.8%[115]', '42%[116] + 11.4%[115]', '10%'],
      name: 'Taxation in South Korea[117]',
    },
    {
      country: 'Kyrgyzstan',
      taxes: [
        '10%[118]',
        '10%',
        '10%',
        '12% (standard rate)5% (highest rate)1% (lowest rate)',
      ],
      name: 'Taxation in Kyrgyzstan',
    },
    {
      country: 'Laos',
      name: 'Taxation in Laos',
    },
    {
      country: 'Latvia',
      taxes: [
        '0% (20% on distribution of profit)[119]',
        '20%[120]',
        '31.4%',
        '21%[121]',
      ],
      name: 'Taxation in Latvia',
    },
    {
      country: 'Lebanon[39]',
      taxes: ['17%', '2%', '25%', '11%'],
      name: 'Taxation in Lebanon',
    },
    {
      country: 'Lesotho',
      name: 'Taxation in Lesotho',
    },
    {
      country: 'Liberia',
      taxes: ['25%[122]'],
      name: 'Taxation in Liberia',
    },
    {
      country: 'Libya',
      name: 'Taxation in Libya',
    },
    {
      country: 'Liechtenstein[123][124]',
      taxes: [
        '12.5%',
        '3%[125]',
        '24%[125]',
        '7.7% (standard rate)3.8% (lodging services)2.5% (reduced rate)[126]',
      ],
      name: 'Taxation in Liechtenstein',
    },
    {
      country: 'Lithuania[citation needed]',
      taxes: [
        '15%[127]',
        '31.2%',
        '42.77%',
        '21%9% (Publications, accommodation services etc.)5% (Medicine, newspapers and magazines etc.)0% (Certain goods and services)',
        '15%',
      ],
      name: 'Taxation in Lithuania',
    },
    {
      country: 'Luxembourg',
      taxes: [
        '28.69% (17% income tax + 1.19% unemployment fund contribution + 6.0-10.5% municipal trade tax [128]',
        '8%',
        '45.78% (42%[129] + 3.78% unemployment fund surcharge)[130]',
        '17% (standard rate)3% (reduced rate)',
      ],
      name: 'Taxation in Luxembourg',
    },
    {
      country: 'Macau[36]',
      taxes: ['12%', '0%', '12%', '0%[96]'],
      name: 'Taxation in Macau',
    },
    {
      country: 'Madagascar',
      name: 'Taxation in Madagascar',
    },
    {
      country: 'Madeira',
      taxes: [
        '5% (available to licensed companies in the International Business Centre of Madeira).n13% (available to SMEs and applicable up to a taxable profit of 20% (general rate)',
        '0,0% (for monthly salaries up to  + social security charges[31]',
        '45.1% (for monthly salaries above + social security charges[31]',
        '5% (reduced rate)n12% (intermediate rate)n22% (standard rate)[131]',
      ],
      name: 'Taxation in Madeira',
    },
    {
      country: 'Malawi',
      name: 'Taxation in Malawi',
    },
    {
      country: 'Malaysia[36]',
      taxes: [
        '24% (highest rate)18% (lowest rate)',
        '0%',
        '28% + 11% for EPF[132] + 1.2% for SOCSO[133]',
        '10% (standard rate for goods)7% (services)5% (reduced rate for goods)[134]',
      ],
      name: 'Goods and Services Tax (Malaysia)',
    },
    {
      country: 'Maldives[135]',
      taxes: [
        '15% (highest rate)8% (lowest rate)[136]',
        '0%',
        '15% (0% for expatriates)',
        '6%[137]',
      ],
      name: 'Taxation in Maldives',
    },
    {
      country: 'Mali',
      name: 'Taxation in Mali',
    },
    {
      country: 'Malta',
      taxes: [
        '35% (unless eligible for 30% rebate)',
        '0%',
        '35%',
        '18% (7% and 5% for certain goods and services)',
      ],
      name: 'Taxation in Malta',
    },
    {
      country: 'Marshall Islands',
      name: 'Taxation in Marshall Islands',
      taxes: ['0%', '12%[138]', '4% (highest rate)2% (lowest rate)'],
    },
    {
      country: 'Mauritania',
      name: 'Taxation in Mauritania',
    },
    {
      country: 'Mauritius',
      taxes: ['15%', '10%', '15%', '15%'],
      name: 'Taxation in Mauritius',
    },
    {
      country: 'Mexico[36]',
      taxes: [
        '30%[139]',
        '1.92%',
        '35% + reduction of deductions (topes)',
        '16%',
      ],
      name: 'Taxation in Mexico',
    },
    {
      country: 'Moldova[36]',
      taxes: [
        '12%',
        '12%[140]',
        '12% (+ 24% for social security)',
        '20% (standard rate)10% (HoReCa)',
      ],
      name: 'Taxation in Moldova',
    },
    {
      country: 'Monaco',
      taxes: [
        '28[141]%',
        '0%[142]',
        '0%',
        '19.6% (highest rate)5.5% (lowest rate)[143]',
      ],
      name: 'Taxation in Monaco',
    },
    {
      country: 'Mongolia',
      taxes: ['10%', '10%', '10%', '10%'],
      name: 'Taxation in Mongolia',
    },
    {
      country: 'Montenegro',
      taxes: [
        '9%[144][145]',
        '9% (first [145]',
        '12.65% (11% national tax + 15% municipality surtax on income tax)[145]',
        '21%[146]7% (essential goods - basic foodstufs, water, pharmaceuticals, books, tourism services, etc.)0% (postal services, education, social security services, healthcare, insurance, etc.)',
      ],
      name: 'Taxation in Montenegro',
    },
    {
      country: 'Montserrat',
      name: 'Taxation in Montserrat',
    },
    {
      country: 'Morocco',
      taxes: [
        '31% (highest rate)10% (lowest rate)[91][147]',
        '0%',
        '38%[147]',
        '20% (standard rate)14%, 10%, 7% (reduced rates)[148]',
      ],
      name: 'Taxation in Morocco',
    },
    {
      country: 'Mozambique',
      name: 'Taxation in Mozambique',
    },
    {
      country: 'Myanmar',
      name: 'Taxation in Myanmar',
    },
    {
      country: 'Namibia',
      taxes: ['32%[149]', '0%[149]', '37%[149]', '15%[149]'],
      name: 'Taxation in Namibia',
    },
    {
      country: 'Nauru',
      name: 'Taxation in Nauru',
    },
    {
      country: '&nbsp;&nbsp;Nepal',
      taxes: [
        '30% (higher rate for financial companies) /25% (standard rate) /20% (reduced rate for manufacturing companies)(+ 5% on profit distribution + 10% mandatory bonus to employees)',
        '0% + 1% social security tax',
        '36% (Including 20% additional tax)[150]',
        '13% (standard rate)[151]288% (for imported vehicles)[152]',
      ],
      name: 'Taxation in Nepal',
    },
    {
      country: 'Netherlands',
      taxes: [
        '25% (on profits over 15%[153] (not over ',
        '37.07% (first  per year is deductible)',
        '49.50%[154] + reduction of deductions (arbeidskorting and general korting)',
        '21% (standard rate)9% (essential and selected goods)',
        '25%',
      ],
      name: 'Taxation in the Netherlands',
    },
    {
      country: 'New Zealand',
      taxes: ['28%', '10.5%[155]', '39%[156]', '15%'],
      name: 'Taxation in New Zealand',
    },
    {
      country: 'New Caledonia[157]',
      taxes: ['30%', '0%', '40%25% (on local income of non-residents)[158]'],
      name: 'Taxation in New Caledonia',
    },
    {
      country: 'Nicaragua',
      name: 'Taxation in Nicaragua',
    },
    {
      country: 'Niger',
      taxes: ['30%[159]', '7%[159]'],
      name: 'Taxation in Niger',
    },
    {
      country: 'Nigeria',
      taxes: ['30%', '7%', '24%', '7.5%'],
      name: 'Taxation in Nigeria',
    },
    {
      country: 'Niue',
      name: 'Taxation in Niue',
      taxes: ['12.5%'],
    },
    {
      country: 'Norfolk Island',
      name: 'Taxation in Norfolk Island',
    },
    {
      country: 'North Macedonia[36]',
      taxes: ['10%', '10%', '18%', '18% (standard rate)5% (reduced rate)'],
      name: 'Taxation in North Macedonia',
    },
    {
      country: 'Norway[160]',
      taxes: [
        '23%[161]',
        '0%',
        '46.4% (22% + 8.2% social security contribution + bracket tax (from 1.8% to 16.2%) minus deductions)[161]',
        '25% (standard rate)15% (food and drink in shops)10% (transportation, cinema and hotel services)',
        '22%',
      ],
      name: 'Taxation in Norway',
    },
    {
      country: 'Oman',
      taxes: ['15%[162][163]', '0%', '0%', '5%'],
      name: 'Taxation in Oman',
    },
    {
      country: 'Pakistan',
      taxes: [
        '0% (for certain tech startup companies with a technology basis and other financial restrictions)[164]n29%[165]',
        '0%n(for income under PKR.600000/annum)',
        '47% variable ( fixed slab amount  + 35%)',
        '17% +3%(for non-registered) (standard GST rate)0% (basic food items)Special Tax cuts for Construction sector .',
      ],
      name: 'Taxation in Pakistan',
    },
    {
      country: 'Palau',
      name: 'Taxation in Palau',
    },
    {
      country: 'Palestine',
      taxes: ['15%', '5%', '15%', '14.5%'],
      name: 'Taxation in Palestine',
    },
    {
      country: 'Panama',
      taxes: [
        '25%',
        '0%',
        '27%',
        '7% (standard rate)15% (tobacco)10% (alcohol and hotels)5% (essential goods)',
      ],
      name: 'Taxation in Panama',
    },
    {
      country: 'Papua New Guinea',
      name: 'Taxation in Papua New Guinea',
    },
    {
      country: 'Paraguay',
      taxes: ['10%', '8%', '10%', '10%'],
      name: 'Taxation in Paraguay',
    },
    {
      country: 'Peru[39]',
      taxes: [
        '30%',
        '0%',
        '30%',
        '16% (standard rate) +2% (municipal promotional tax) (impuesto selectivo al consumo: liquor, cigarettes, etc.)',
      ],
      name: 'Taxation in Peru',
    },
    {
      country: 'Philippines',
      taxes: ['30%', '0%', '35%', '12% (standard rate)0% (reduced rate)'],
      name: 'Taxation in the Philippines',
    },
    {
      country: 'Pitcairn Islands',
      name: 'Taxation in Pitcairn Islands',
      taxes: ['0%[166]', '0%[166]'],
    },
    {
      country: 'Poland[167]',
      taxes: [
        '19% (9% for small taxpayer, those with revenue in a given tax year not exceeding the equivalent of  million and that have  small taxpayer   status)[167]',
        '9% (for income under 30.000 zÅx82otych per year)0% income tax [168]9% Health Insurance(non-deductible)[169]',
        '41% or 45%,32% Income tax health insurance 4% solidarity tax above 1.000.000 zÅx82otych per year[170]nSelf-employedn23,9% or 27.9%(not deduction first 30.000 zÅx82otych)flat income tax 4,9% health insurance 4% solidarity tax above 1 milion zÅx82otych',
        '23% (standard rate)8% or 5% (reduced rates)',
        '19%',
      ],
      name: 'Taxation in Poland',
    },
    {
      country: 'Portugal[36]',
      taxes: [
        '21% (in mainland)',
        '14.5%',
        '48% + 11% social security',
        '23% (standard rate)13% or 6% (standard rate)',
      ],
      name: 'Taxation in Portugal',
    },
    {
      country: 'Puerto Rico',
      taxes: ['20%[171]', '0% (16% proposed)', '33.34%', '11.5%'],
      name: 'Taxation in Puerto Rico',
    },
    {
      country: 'Qatar[36]',
      taxes: ['10%', '0%', '0%', '0%'],
      name: 'Taxation in Qatar',
    },
    {
      country: 'Romania',
      taxes: [
        '16% (or 1% revenue for micro-entities with at least one employee, or 3% for micro-enterprises with no employees)[172]',
        '35% n25% social security (CAS)n10% health insurance (CASS)n0% income tax for IT workers, people with disabilities[172]',
        '41.5% n25% social security (CAS)n10% health insurance (CASS)n10% income tax after CAS and CASSnSelf employed (PFA):nn25% CAS if earning more than 12 minimum wages in a yearn10% CASS, taxable sum capped at 12 minimum wages per year, e.g. you pay a maximum of 2280 RON as CASS contribution in 2018 if you earn over RON 22,800 for the whole year)n10% income tax[172]',
        '19% (standard rate)9% ((food, medicines, books, newspapers and hotel services)5% (reduced rate)[39]',
        '10%',
      ],
      name: 'Taxation in Romania',
    },
    {
      country: 'Russia[36]',
      taxes: [
        '20%[2]',
        '13%',
        '15% (for those earning more than 5 mil. roubles a year)[173]n35% for non-residents',
        '20% (standard rate)10% (books, certain items of food and children goods)0% (house or flat)',
      ],
      name: 'Taxation in Russia',
    },
    {
      country: 'Rwanda',
      taxes: ['30%', '0%', '30%', '18%'],
      name: 'Taxation in Rwanda',
    },
    {
      country: 'Saint Kitts and Nevis',
      taxes: ['33%[174]', '0%', '0%'],
      name: 'Taxation in Saint Kitts and Nevis',
    },
    {
      country: 'Saint Lucia',
      name: 'Taxation in Saint Lucia',
    },
    {
      country: 'Saint Pierre and Miquelon',
      name: 'Taxation in Saint Pierre and Miquelon',
    },
    {
      country: 'Saint Vincent and the Grenadines',
      name: 'Taxation in Saint Vincent and the Grenadines',
    },
    {
      country: 'Samoa',
      name: 'Taxation in Samoa',
    },
    {
      country: 'San Marino',
      taxes: ['17%', '12%', '50%', '0% (standard rate)17% (imported goods)'],
      name: 'Taxation in San Marino',
    },
    {
      country: 'SÃ£o TomÃ© and PrÃ­ncipe',
      name: 'Taxation in SÃ£o TomÃ© and PrÃ­ncipe',
    },
    {
      country: 'Sark',
      taxes: [
        '0%[175]',
        '0%',
        '0% (Note: There are taxes on property and personal capital, maximum at Â£6,500.)',
        '0%',
      ],
      name: 'Taxation in Sark',
    },
    {
      country: 'Saudi Arabia[176]',
      taxes: ['15%', '0%', '0%', '15%'],
      name: 'Taxation in Saudi Arabia',
    },
    {
      country: 'Senegal[39]',
      taxes: ['25%', '0%', '50%', '20%'],
      name: 'Taxation in Senegal',
    },
    {
      country: 'Serbia[177]',
      taxes: [
        '15%[178]',
        '10%',
        '25% (additional contributions for state health, pension and unemployment funds)[179]',
        '20% (standard rate)[180][181]10% or 0% (reduced rates)',
        '15%',
      ],
      name: 'Taxation in Serbia',
    },
    {
      country: 'Seychelles',
      taxes: ['33% [5]', '15%', '15%', '15%'],
      name: 'Taxation in Seychelles',
    },
    {
      country: 'Sierra Leone',
      name: 'Taxation in Sierra Leone',
    },
    {
      country: 'Singapore',
      taxes: ['17%[182]', '0%', '22% (+ 20% tax on pension)', '7%'],
      name: 'Taxation in Singapore',
    },
    {
      country: 'Sint Maarten',
      name: 'Taxation in Sint Maarten',
    },
    {
      country: 'Slovakia',
      taxes: [
        '21% (on profits over 15% ',
        '21%',
        '25%[183]',
        '20% (standard rate)[citation needed]10% (books and medicines)',
        '25%',
      ],
      name: 'Taxation in Slovakia',
    },
    {
      country: 'Slovenia[36]',
      taxes: [
        '19%',
        '16%',
        '50%',
        '22% (standard rate) or 9.5% (food, building and renovation, transport, tickets, media) or 5% (books, newspaper)',
        '27.5%',
      ],
      name: 'Taxation in Slovenia',
    },
    {
      country: 'Solomon Islands',
      name: 'Taxation in Solomon Islands',
    },
    {
      country: 'Somalia',
      name: 'Taxation in Somalia',
    },
    {
      country: 'South Africa',
      taxes: ['28%[184]', '0% (below threshold)', '45%', '15%[185]'],
      name: 'Taxation in South Africa',
    },
    {
      country: 'South Sudan',
      name: 'Taxation in South Sudan',
    },
    {
      country: 'Spain[36]',
      taxes: [
        '25% (in mainland)4% (in &nbsp;Canary Islands)',
        '19%',
        '54% (in &nbsp;Valencian Community)  [186] 52% (in &nbsp;Navarre)  [186]  47% (estatal without regional)',
        '21% (standard rate)10% or 4% (reduced rates)',
        '23%',
      ],
      name: 'Taxation in Spain',
    },
    {
      country: 'Sri Lanka[36]',
      taxes: [
        '30% (highest rate)15% (lowest rate)[91]',
        '0%',
        '15% (if annual income is more than LKR 2.5 million)',
        '12% (standard rate)8% or 0% (reduced rates)',
      ],
      name: 'Taxation in Sri Lanka',
    },
    {
      country: 'Sudan',
      name: 'Taxation in Sudan',
    },
    {
      country: 'Suriname',
      taxes: [
        '36%[187]',
        '8% (first SRD2,646 per year is deductible)',
        '38%[188]',
      ],
      name: 'Taxation in Suriname',
    },
    {
      country: 'Sweden',
      taxes: [
        '20.6%[189]',
        '32% (first US$1,930 per year is deductible)',
        '52% (32% average municipality income tax + 20% state income tax)[190][191]',
        '25% (standard rate)12% or 6% (reduced rate)[192]',
      ],
      name: 'Taxation in Sweden',
    },
    {
      country: '&nbsp;Switzerland[39]',
      taxes: [
        '17.92%[91]',
        '0%',
        '59.7%  (10.6% (mandatory social security contributions)[193]  11.5% (federal)[194]  28.025% (cantonal, Geneva)[195]  9.69% (communal, Avully and Chancy, both canton of Geneva)[195]  3.04% (church tax, roman catholic and protestant in Geneva)[195]  the total marginal tax rate is slightly lower as some mandatory social security contributions are deductible from other taxes)',
        '7.7% (standard rate)3.8% or 2.5% (reduced rates)',
      ],
      name: 'Taxation in Switzerland',
    },
    {
      country: 'Syria[36]',
      taxes: ['22%', '5%', '15%'],
      name: 'Taxation in Syria',
    },
    {
      country: 'Taiwan[36]',
      taxes: ['20%[196]', '5%', '40%', '5%[197]'],
      name: 'Taxation in Taiwan',
    },
    {
      country: 'Tajikistan[198]',
      taxes: ['13%25% (non-residents)', '5%', '13%25% (non-residents)', '18%'],
      name: 'Taxation in Tajikistan',
    },
    {
      country: 'Tanzania',
      taxes: ['30%', '15%', '30%', '18%'],
      name: 'Taxation in Tanzania',
    },
    {
      country: 'Thailand',
      taxes: ['20%', '0%', '35%', '7%'],
      name: 'Taxation in Thailand',
    },
    {
      country: 'Togo',
      name: 'Taxation in Togo',
    },
    {
      country: 'Tokelau',
      name: 'Taxation in Tokelau',
    },
    {
      country: 'Tonga',
      name: 'Taxation in Tonga',
    },
    {
      country: 'Trinidad and Tobago',
      taxes: ['30%', '0%', '30%', '12.5%'],
      name: 'Taxation in Trinidad &amp; Tobago',
    },
    {
      country: 'Tunisia[39]',
      taxes: [
        '30%',
        '0%',
        '35%',
        '18% (standard rate)12% or 6% (reduced rate)',
      ],
      name: 'Taxation in Tunisia',
    },
    {
      country: 'Turkey[36]',
      taxes: [
        '25%',
        '15%',
        '40%',
        '18% (standard rate)8% (clothing)1% (certain food items)[49]',
      ],
      name: 'Taxation in Turkey',
    },
    {
      country: 'Turkmenistan',
      name: 'Taxation in Turkmenistan',
    },
    {
      country: 'Turks and Caicos Islands',
      name: 'Taxation in Turks and Caicos Islands',
    },
    {
      country: 'Tuvalu',
      name: 'Taxation in Tuvalu',
    },
    {
      country: 'Uganda',
      taxes: ['30%[199]', '18%[200]'],
      name: 'Taxation in Uganda',
    },
    {
      country: 'Ukraine',
      taxes: [
        '18% [201]',
        '0% [202]',
        '18% (common rate)  20% (some activities) [203]',
        '20% (standard rate)7% or 0% (reduced rates)',
      ],
      name: 'Taxation in Ukraine',
    },
    {
      country: 'United Arab Emirates',
      taxes: [
        '0% (until 31 May 2023)n0 (free zone companies,[204] may need to still fill out tax return)n0% (from 1 June 2023, for mainland companies with net profit under AED 375,000,[205] may need to still fill out tax return)n9% (from 1 June 2023 for mainland companies with a net profit over AED 375,000 with taxation paid to other countries credited towards UAE taxation and a tax return required)[206]',
        '0%[207]',
        '0%[207]',
        '0%[207]',
        '0%[208]',
      ],
      name: 'Taxation in United Arab Emirates',
    },
    {
      country: 'United Kingdom[209]',
      taxes: [
        '19%[210]',
        '32%n(20% Income Tax + 12% Class I NI)n(0% Income Tax on first Â£12,570) [211]',
        '42%n(40% Income Tax for Â£50,271 to Â£150,000 + 2% Class I NI for Â£797 to Â£4189 pmn+ 2% Class I NI for over Â£4189 pm)n47% (over Â£150,000) [211]',
        "20% (standard rate)5% (home energy and renovations)0% (life necessities: groceries, water, prescription medications, medical equipment and supplies; public transport; children's clothing; books and periodicals)[212]",
        '20%',
      ],
      name: 'Taxation in the United KingdomnNational Insurance',
    },
    {
      country: 'United States',
      taxes: [
        '21% (federal)',
        '10% (federal) (state)  (local) (federal standard deduction of 12550 USD for single taxpayers)',
        '51.6%  in Portland, Oregon (37% federal tax[213] + 9.9% state tax[214] + 4.7% city tax[215])',
        '11.5% (highest prevailing marginal state and local sales tax rate)0% (lowest prevailing marginal rate)',
        '20%',
      ],
      name: 'Taxation in the United States',
    },
    {
      country: 'Uruguay[39]',
      taxes: [
        '25%',
        '0%',
        '30%',
        '22% (standard rate)11% (lowest rate)0% (extent)',
      ],
      name: 'Taxation in Uruguay',
    },
    {
      country: 'Uzbekistan[39]',
      taxes: [
        '12% (standard rate)20% (banks and mobile communication operators)',
        '12%',
        '12%',
        '15% (highest rate)0% (lowest rate)',
      ],
      name: 'Taxation in Uzbekistan',
    },
    {
      country: 'Vanuatu',
      name: 'Taxation in Vanuatu',
    },
    {
      country: 'Venezuela[39]',
      taxes: [
        '34%',
        '6% (0% under certain income, defined every year)',
        '34%',
        '16% (standard rate)8% (reduced rate)',
      ],
      name: 'Taxation in Venezuela',
    },
    {
      country: 'Vietnam[36]',
      taxes: ['20%', '5%', '35%[216]', '10%'],
      name: 'Taxation in Vietnam',
    },
    {
      country: 'British Virgin Islands',
      taxes: ['0%[217]', '0%', '0%'],
      name: 'Taxation in the British Virgin Islands',
    },
    {
      country: 'U.S. Virgin Islands',
      taxes: ['10%'],
      name: 'Taxation in United States Virgin Islands',
    },
    {
      country: 'Yemen',
      taxes: ['20%[218]', '10%', '15%', '2%'],
      name: 'Taxation in Yemen',
    },
    {
      country: 'Zambia',
      taxes: ['35%', '10%', '30%', '16%'],
      name: 'Taxation in Zambia',
    },
    {
      country: 'Zimbabwe',
      taxes: ['25%', '0%', '45%', '15% (standard rate)0% (on selected items)'],
      name: 'Taxation in Zimbabwe',
    },
  ],
};

export function getAllCountryTaxes():Tax{
  return taxes;
}