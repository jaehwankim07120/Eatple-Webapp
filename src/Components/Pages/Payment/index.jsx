/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

import styled from 'styled-components';

import queryString from 'query-string';

import RestAPI from 'server/RestAPI';

import { PGS } from './constants';

import 'antd/dist/antd.css';

export default function PGPayment({ history }) {
  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  const { merchant_uid } = query;

  if (merchant_uid === undefined) {
    const queryStr = queryString.stringify(query);

    history.push(`/payment/result?${queryStr}`);
  }

  RestAPI.get('order_information', {
    params: {
      merchant_uid,
    },
  }).then(response => {
    const resOrder = response.data;
    console.log(resOrder);

    const { store, menu, amount, buyer_name, buyer_tel, buyer_email } = resOrder;

    const data = {
      amount,
      buyer_email,
      buyer_name,
      buyer_tel,
      escrow: undefined,
      merchant_uid,
      name: `${store} - ${menu}`,
      pay_method: '카드',
      pg: PGS[0].value,
      request_id: 'req_1576041755685',
      tier_code: undefined,
    };

    function callback(response) {
      const resQuery = queryString.stringify(data);

      history.push(`/payment/result?${resQuery}`);
    }

    RestAPI.get('order_validation', {
      params: {
        merchant_uid,
      },
    })
      .then(response => {
        const resOrder = response.data;
        console.log(resOrder);

        if (resOrder.error_code === 200) {
          const { IMP } = window;

          const userCode = 'imp49220546';

          IMP.init(userCode);
          IMP.request_pay(data, callback);
        } else {
          const data = {
            success: false,
            imp_success: false,
            imp_uid: resOrder.merchant_uid,
            error_msg: resOrder.error_msg,
            error_code: resOrder.error_code,
            buyer_name,
            merchant_uid,
          };

          const query = queryString.stringify(data);

          history.push(`/payment/result?${query}`);
        }
      })
      .catch(response => {
        console.log(response);
      });
  });

  return <Wrapper />;
}

const Wrapper = styled.div`
  padding: 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
