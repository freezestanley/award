import GameInfo from '@/components/game/GameItem';
import { connect } from 'dva';
import Navbar from '@/components/Navbar';
import { gameList } from '@/utils/game';
import router from 'umi/router';
import styles from './index.less';

function Home(props) {
  const handleRecharge = data => {
    props.dispatch({ type: 'global/setGame', payload: data });
    router.push(`/${data.name}/recharge`);
  };
  return (
    <>
      <div className={styles.normal}>
        {gameList.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <GameInfo data={item} />
            <button onClick={() => handleRecharge(item)}>充值</button>
          </div>
        ))}
      </div>
      <Navbar />
    </>
  );
}

export default connect(state => state.global)(Home);
