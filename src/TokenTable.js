import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenTable = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.dexscreener.com/latest/dex/tokens/new');
      setTokens(res.data.pairs.slice(0, 10));
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Топ токенов</h1>
      <table>
        {tokens.map(token => (
          <tr key={token.id}>
            <td>{token.baseToken.name}</td>
            <td>${token.priceUsd}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TokenTable;
