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
        Ferretti Lab is a research group in big data for genetics research.
      </p>
      <p>
        We write software for 
        bioinformatics analysis of the genome aiming to identify
        and characterize genetic variations linked with diseases.
        Our team of bioinformaticians and software engineers apply 
        modern information technology for analyzing big data for genomics
        research.
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
        <Label labelText="clinical genomics" />
        <Label labelText="artificial intelligence" />
        <Label labelText="machine learning" />
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

