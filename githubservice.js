const { graphql } = require("@octokit/graphql");

const getMyAPI = async () => {
  
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    const repository = await graphqlWithAuth(`
    {
      user(login: "${process.env.GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                
                date
              }
            }
          }
        }
      }
    }
    `);
  
    const total = repository.user.contributionsCollection.contributionCalendar.weeks;
  
    const totalLength = total.length;
  
    const lastWeek = total[totalLength - 1];
  
    return(lastWeek.contributionDays[0].contributionCount);
  
};
  
module.exports = {getMyAPI};
