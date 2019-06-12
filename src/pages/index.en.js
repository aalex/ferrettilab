/**
 * @file Contents of the home page - in English.
 */
import React from 'react';
import Layout from '../layouts/en';
import Label from '../components/Label';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <p>
        Ferretti Labs is a research group in big data for genetics research.
      </p>
      <p>
        Our research activities are centered on the development of methods and
        software for bioinformatics analysis of the genome aiming to identify
        and characterize genetic variations linked with diseases. Our team of
        bioinformaticians and software engineers apply modern information
        technology for analyzing big data for genommics research. We develop
        tools and advanced processing software for data vizualization and cloud
        computing platforms. We work on building many infrastructure projects
        for research and clinical use, namely the NIH Gabriella Miller Kids
        First Data Resource Center, the Centre québécois de données génomiques
        and the Centre québécois de génomique clinique.
      </p>
      <div>
        <Label labelText="big data" />
        <Label labelText="bioinformatics" />
        <Label labelText="cloud computing" />
        <Label labelText="applied research" />
        <Label labelText="genomics" />
        <Label labelText="software engineering" />
        <Label labelText="infrastructure" />
        <Label labelText="software development" />
        <Label labelText="open source" />
      </div>
      <figure class="image">
        <img
          className="is-rounded"
          src="/images/map_chusj.png"
          alt="map - CHU Ste-Justine"
        />
      </figure>
    </div>
  </Layout>
);

export default IndexPage;
