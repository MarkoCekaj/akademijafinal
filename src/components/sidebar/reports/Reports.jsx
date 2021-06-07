import React from 'react';
import {t} from 'react-switch-lang';
import {NavLink} from 'react-router-dom';

const Reports = ({toggleSidebarExtraReports}) => {
  const navigation = [
    {
      name: t('reports.title.vacations'),
      link: '/reports/report',
      tooltip: t('reports.title.vacations'),
    },
  ];

  return (
    <div className="administration">
      {navigation.map((item, idx) => (
        <div key={idx}>
          <NavLink
            activeClassName="active"
            className="administration-links links reports-tooltip-container"
            to={item.link}
            key={idx}
            onClick={() => toggleSidebarExtraReports('reports')}
          >
            <div className="report-text">{item.name}</div>
            {item.name.length > 1 ? (
              <div className="second-tooltip-text">
                <span>{item.name}</span>
              </div>
            ) : (
              ''
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Reports;
