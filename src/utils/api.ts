export const getContributions = async () => {
  const headers = {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
  };
  const body = {
    query: `query {
          user(login: "leejiwonn") {
            name
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                  firstDay
                }
              }
            }
          }
        }`,
  };

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data.data.user;
};
