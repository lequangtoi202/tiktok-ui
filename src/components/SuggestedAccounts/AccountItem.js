import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (attrs) => {
    return (
      <div tabIndex="-1" {...attrs}>
        <PopperWrapper>
          <div className={cx('preview')}>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/232aaa9fb2f981646202ea6f956713d2~c5_100x100.jpeg?x-expires=1685412000&x-signature=JyWXNQq79YOJJDaSpdeceuE8Le0%3D"
            alt=""
            className={cx('avatar')}
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>Le Quang Toi</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Le Quang Toi</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
