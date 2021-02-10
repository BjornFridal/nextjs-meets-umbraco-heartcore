const fetcher = async (endpoint) => {
  const result = await fetch(`https://cdn.umbraco.io/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'umb-project-alias': 'dev-nextjs-meets-umbraco-heartcore',
      'Accept-Language': 'en-US'
    }
  });

  return await result.json();
};

export async function getBandMembers() {
  const result = await fetcher(`content/type?contentType=bandMember`);
  const content = result._embedded.content;

  return content.map(({ _url, name }) => ({
    url: _url,
    name
  }));
}

export async function getBandMember(url) {
  const content = await fetcher(`content/url?url=${url}`);
  return {
    fullname: content.fullname,
    biography: content.biography
  };
}
