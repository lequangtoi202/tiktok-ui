import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/232aaa9fb2f981646202ea6f956713d2~c5_100x100.jpeg?x-expires=1685412000&x-signature=JyWXNQq79YOJJDaSpdeceuE8Le0%3D"
          alt=""
        />
        <div>
          <Button primary className={cx('following-btn')}>
            Following
          </Button>
        </div>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Le Quang Toi</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Le Quang Toi</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
