import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className='h-main'>
        Welcome to my site
      </div>

      <div className='h-mini-bio'>
        <div className="hm-title">
          <h2>Acerca de</h2>
          <h2>Cinematografo. Cineasta. Narador.</h2>
        </div>

        <div className='hm-para'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>

          <NavLink to="/bio">
            Read More →
          </NavLink>
        </div>
      </div>

      <div className='h-topics'>
        <div className='t-wedding'>
          <a href='#0'>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path
                d="M2.399 12.149c-.129-.246-.397-.756-.397-1.631 0-2.009 1.629-3.479 3.242-3.518h13.513c1.803.091 3.243 1.646 3.243 3.519 0 .592-.145 1.148-.4 1.636 1.389.448 2.4 1.794 2.4 3.364 0 .962-.383 1.831-1 2.46v6.021h-22v-6.022c-.429-.438-1-1.37-1-2.46 0-1.655 1.107-2.944 2.399-3.369zm18.601 6.824l-.405.025c-.775 0-1.541-.27-2.154-.79-.576.488-1.333.789-2.155.789-.812 0-1.566-.295-2.142-.779-.581.487-1.341.78-2.136.78-.807 0-1.575-.292-2.149-.78-.586.491-1.346.78-2.137.78-.775 0-1.526-.26-2.16-.79-.561.479-1.328.79-2.154.79l-.408-.025v3.027h18v-3.027zm-17.708-4.973c-.627.049-1.243.635-1.288 1.421-.051.887.632 1.585 1.454 1.576 1.176-.014 1.915-.86 2.117-1.997.217.88.986 1.975 2.145 1.996 1.156.021 1.99-.959 2.161-1.958l.008-.038c.199 1.04.99 1.996 2.109 1.996 1.155 0 1.917-.872 2.172-1.996.248 1.138 1.035 1.994 2.117 1.997 1.108.003 1.955-.928 2.203-1.997.188.828.804 1.985 2.051 1.998.759.008 1.46-.65 1.46-1.483 0-.837-.649-1.481-1.318-1.517l-17.391.002zm10.953-2c1.108-.009 1.997-.931 2.245-2 .188.828.804 1.985 2.051 1.998.759.008 1.46-.65 1.46-1.483 0-.837-.649-1.481-1.318-1.517l-13.391.002c-.627.049-1.243.635-1.288 1.421-.051.887.632 1.585 1.454 1.576 1.176-.014 1.915-.86 2.117-1.997.217.88 1.002 1.991 2.161 2h.023c1.199-.008 2.191-1.326 2.241-2 .052.659.983 1.992 2.219 2h.026zm-2.245-9.146c-.454-1.947-2.479-.955-1.531.577.765 1.237 1.095 1.951 1.126 3.103-1.378-1.716-3.597-2.838-3.595-4.519.002-1.287.941-2.014 2-2.014.705 0 1.522.256 2 .882.485-.6 1.329-.887 2-.882 1.06.008 1.998.669 2 2.014.002 1.681-2.146 2.784-3.595 4.519.031-1.152.361-1.866 1.126-3.103.948-1.532-1.089-2.508-1.531-.577z"
              />
            </svg>

            <h4>Weddings</h4>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
          </a>
        </div>

        <div className='t-party'>
          <a href='#0'>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.205 17.646c-.865.18-1.771.07-2.573-.323-.953-.466-1.682-1.291-2.026-2.295-.791-2.305-1.405-5.566-1.975-8.837l5.675-1.947c1.525 2.958 3.087 5.915 3.867 8.188.344 1.003.276 2.102-.19 3.055-.392.802-1.039 1.446-1.832 1.834l1.215 3.542c.29.814 1.322.926 2.392.809l.242.705-4.729 1.623-.261-.759c.903-.478 1.688-1.214 1.41-2.053l-1.215-3.542zm-15.356-.325c-.793-.388-1.44-1.032-1.832-1.834-.466-.953-.534-2.052-.19-3.055.78-2.273 2.342-5.23 3.867-8.188l5.675 1.947c-.57 3.271-1.184 6.532-1.975 8.837-.344 1.004-1.073 1.829-2.026 2.295-.802.393-1.708.503-2.573.323l-1.205 3.512c-.278.839.507 1.575 1.41 2.053l-.271.789-4.729-1.623.252-.735c1.07.118 2.102.005 2.392-.808l1.205-3.513zm14.901-2.821c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-15-1c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm2.5-1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm11.75-.107c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm1.939-1.893c-.663-1.525-1.441-3.012-2.178-4.512l-3.917 1.344c.214 1.059.41 2.121.636 3.168h5.459zm-10.419 0c.226-1.047.422-2.109.636-3.168l-3.917-1.344c-.737 1.5-1.515 2.987-2.178 4.512h5.459zm4.915-6.015l1.642-2.79c.141-.238.061-.545-.177-.685-.238-.139-.544-.062-.684.177l-1.643 2.79c-.14.238-.06.545.177.685.08.047.167.069.254.069.171 0 .338-.088.431-.246zm-4.552.246c-.171 0-.337-.088-.431-.246l-1.643-2.79c-.14-.238-.061-.545.177-.685s.544-.061.685.177l1.643 2.79c.14.238.061.545-.177.685-.08.047-.167.069-.254.069zm2.621-.708v-3.023c0-.277-.224-.5-.5-.5s-.5.223-.5.5v3.023c0 .276.224.5.5.5s.5-.224.5-.5z"
              />
            </svg>

            <h4>Parties</h4>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
          </a>
        </div>

        <div className='t-music'>
          <a href='#0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2-.896 2-2 2zm0-12c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.914 20.526c-2.625-.902-4.697-2.978-5.592-5.606l1.02-.127c.807 2.174 2.529 3.901 4.699 4.714l-.127 1.019zm.258-2.054c-1.723-.71-3.098-2.085-3.807-3.807l1.041-.13c.596 1.272 1.623 2.299 2.895 2.896l-.129 1.041zm8.095-9.007c-.598-1.272-1.625-2.3-2.896-2.896l.131-1.041c1.721.71 3.096 2.085 3.807 3.807l-1.042.13zm2.049-.256c-.814-2.157-2.529-3.869-4.691-4.677l.129-1.019c2.613.896 4.68 2.958 5.582 5.568l-1.02.128z"
              />
            </svg>

            <h4>Music Videos</h4>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;