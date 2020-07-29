import * as React from 'react';

const tabNames = [`Overview`, `Details`, `Reviews`];

type TabsProps = {
  onTabClick: (id: number | string) => void;
  activeTab: number;
};

const Tabs: React.FunctionComponent<TabsProps> = (props: TabsProps) => {
  const {onTabClick, activeTab} = props;

  return (
    <ul className="movie-nav__list">
      {tabNames.map((tabName, i) => {
        return (
          <li className={`movie-nav__item ${
            activeTab === i
              ? `movie-nav__item--active`
              : ``
          }`} key={tabName + i}>
            <a href="#" className="movie-nav__link" onClick={(evt) => {
              evt.preventDefault();
              if (activeTab !== i) {
                onTabClick(i);
              }
            }}>{tabName}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
