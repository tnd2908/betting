import { GlobalOutlined, TeamOutlined } from "@ant-design/icons";
import { Checkbox, Col, Layout, Radio, Row } from "antd";
import React from "react";

const { Content, Sider } = Layout;

type Props = {};

const SidebarFilter = (props: Props) => {
  function onChange(checkedValues: any) {
    console.log("checked = ", checkedValues);
  }
  return (
    <>
      <div className="filter__title">
        <h3>
          <GlobalOutlined />
          League
        </h3>
      </div>
      <Radio.Group defaultValue="a" className="filter__group">
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Radio value="a" className="filter__radio">
              All
            </Radio>
          </Col>
          <Col span={24}>
            <Radio value="b" className="filter__radio">
              UEFA
            </Radio>
          </Col>
          <Col span={24}>
            <Radio value="c" className="filter__radio">
              PREMIER
            </Radio>
          </Col>
          <Col span={24}>
            <Radio value="d" className="filter__radio">
              Laliga
            </Radio>
          </Col>
        </Row>
      </Radio.Group>
      <div className="filter__title">
        <h3>
          <TeamOutlined />
          Team
        </h3>
      </div>
      <Checkbox.Group className="filter__group" onChange={onChange}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Checkbox value="A" className="filter__checkbox">
              A
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="B" className="filter__checkbox">
              B
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="C" className="filter__checkbox">
              C
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="D" className="filter__checkbox">
              D
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="E" className="filter__checkbox">
              E
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="F" className="filter__checkbox">
              A
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="G" className="filter__checkbox">
              B
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="H" className="filter__checkbox">
              C
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="I" className="filter__checkbox">
              D
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="K" className="filter__checkbox">
              E
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="L" className="filter__checkbox">
              A
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="M" className="filter__checkbox">
              B
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="N" className="filter__checkbox">
              C
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="O" className="filter__checkbox">
              D
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="P" className="filter__checkbox">
              E
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  );
};
export default SidebarFilter;
