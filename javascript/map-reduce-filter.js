const list = [20,3,234,12,17,541,6,87,275,1000];

const companies = [
    {name: 'Samsumg', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadelha', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim cook', foundedOn: 1976}
];
const add10PercentMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}
const oldCompanies = company => company.foundedOn < 2000  // para retornar automaticamnte use arrow e codigo na mesma linha!

const allOld = (acc, current) => acc + current.marketValue

const mtBestCompanies = companies.map(add10PercentMarketValue).filter(oldCompanies).reduce(allOld,0)



console.log(mtBestCompanies)