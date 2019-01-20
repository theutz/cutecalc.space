import React, { SFC } from "react";
import config from "../../config";

const { title } = config;

const Header: SFC<Props> = (props) => {
	return <div {...props}>{title}</div>;
};

interface Props {
	className?: string;
}

export default Header;
