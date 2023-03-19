import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 8px;

  img {
    margin: 0 auto;
    width: 120px;
  }
`;

export const ProfileDescription = styled.div`
  text-align: center;
  font-weight: 500;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
