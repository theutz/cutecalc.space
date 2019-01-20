import React, { SFC } from "react";
import config from "../config";

const Header: SFC<Props> = () => <div>{config.title}</div>;

interface Props {
	className?: string;
}

export default Header;
