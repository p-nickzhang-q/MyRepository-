// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.util.JSON;

import dao.DBCollectionFactory;

@Controller
public class DataController {

  private DBCollection dataCollection = DBCollectionFactory.getDataDBCollection();

  @RequestMapping(value = "/data.do", method = RequestMethod.POST)
  public @ResponseBody void save(@RequestBody String postData) {
    BasicDBObject data = (BasicDBObject) JSON.parse(postData);
    dataCollection.insert(data);
  }

}
