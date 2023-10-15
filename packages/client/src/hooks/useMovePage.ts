import { useNavigate } from 'react-router-dom';

import { PATH } from '@constants/paths';

export const useMovePage = () => {
  const navigate = useNavigate();

  const handleMoveCommunity = () => {
    navigate(PATH.community);
    return;
  };

  const handleMoveSearch = () => {
    navigate(PATH.search);
    return;
  };

  const handleMoveMatch = () => {
    navigate(PATH.match);
    return;
  };

  const handleMoveLogin = () => {
    navigate(PATH.login);
    return;
  };

  return { handleMoveCommunity, handleMoveSearch, handleMoveMatch, handleMoveLogin };
};
