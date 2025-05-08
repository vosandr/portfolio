// import Block from "widgets/Form/Block"
import Blocks from 'widgets/Form/Blocks'
import Block from 'widgets/Form/BlockWithBorder'
import Border from 'widgets/Form/Border'

export default function () {
    return (
        <>
            <h1>My Professional Roadmap</h1>
            <Blocks>
                <Block>
                    {' '}
                    <h2>Apps</h2>
                    <h3>Flutter</h3>
                    <ul>
                        <li>Stateless Widget</li>
                        <li>Stateful Widget</li>
                        <li>Bloc</li>
                        <li>dart:io</li>
                    </ul>
                    <ul className="pt-4">
                    <li>
                    <a className="btn btn-outline btn-sm" href="https://gitflic.ru/project/tengocommand/tengo">
                        Tengo
                    </a>
                    </li>
                    <li>
                    <a className="btn btn-outline btn-sm" href="https://www.rustore.ru/catalog/developer/fqglzx">
                        Projects on Rustore
                    </a>
                    </li>
                    </ul>
                </Block>
                <Block>
                    <h2>Sites</h2>
                    <ul>
                        <li>
                            <h3>TypeScript Stack</h3>
                            <Border>
                                <h4>Frontend</h4>
                                <li>Tailwind</li>
                                <li>Preact</li>
                                <li>Vite</li>
                                <li>Tsx</li>
                                <ul className="pt-4">
                                <li>
                                <a className="btn btn-outline btn-sm" href="https://github.com/Borodutch/frontend-starter">
                                    Based on this frontend starter
                                </a>
                                </li>
                                {/* <li>
                                <a className="btn btn-outline btn-sm" href="">
                                    The knowledge that has been gained in this
                                    area
                                </a>
                                </li> */}
                                <li>
                                <a className="btn btn-outline btn-sm" href="https://github.com/vosandr/portfolio">
                                    This project
                                </a>
                                </li>
                                </ul>
                            </Border>
                            <Border>
                                <h4>Backend (In Progress)</h4>
                                <li>Koa</li>
                            </Border>
                        </li>
                    </ul>
                </Block>
                <Block>
                    <ul>
                        <h3>DevSecOps (In Progress)</h3>
                        <li>Ansible</li>
                        <li>Docker/Podman</li>
                        <li>GitHub Webhooks</li>
                        <li>Git</li>
                    </ul>
                </Block>
            </Blocks>
        </>
    )
}
